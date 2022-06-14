import { GetInfoType } from "@components/contexts";
import { SwapFormActions, SwapFormModes } from "@components/interface";
import { AugmentedAMM } from "@utilities";
import { isNumber, isUndefined } from "lodash";
import { useEffect, useRef, useState } from "react";
import { hasEnoughTokens, hasEnoughUnderlyingTokens, lessThan } from "@utilities";
import { useAgent, useAMMContext, useBalance, useMinRequiredMargin, useTokenApproval } from "@hooks";
import { InfoPostSwap, Position } from "@voltz-protocol/v1-sdk";
import * as s from "./services";
import { BigNumber } from "ethers";
import { SwapFormMarginAction, SwapFormSubmitButtonHintStates, SwapFormSubmitButtonStates } from "./types";

export type SwapFormState = {
  leverage: number;
  margin?: number;
  marginAction: SwapFormMarginAction;
  notional?: number;
  partialCollateralization: boolean;
};

export type SwapFormData = {
  action: SwapFormActions;
  approvalsNeeded: boolean;
  balance?: BigNumber;
  errors: Record<string, string>;
  hintState: SwapFormSubmitButtonHintStates;
  isAddingMargin: boolean;
  isFCMAction: boolean;
  isRemovingMargin: boolean;
  isTradeVerified: boolean;
  isValid: boolean;
  minRequiredMargin?: number;
  setLeverage: (value: SwapFormState['leverage']) => void;
  setMargin: (value: SwapFormState['margin']) => void;
  setMarginAction: (value: SwapFormState['marginAction']) => void;
  setNotional: (value: SwapFormState['notional']) => void;
  setPartialCollateralization: (value: SwapFormState['partialCollateralization']) => void;
  state: SwapFormState;
  swapInfo: {
    data?: InfoPostSwap;
    errorMessage?: string;
    loading: boolean;
  }
  submitButtonState: SwapFormSubmitButtonStates;
  tokenApprovals: ReturnType<typeof useTokenApproval>;
  validate: () => Promise<boolean>;
};

export const useSwapForm = (
  position: Position | undefined,
  amm: AugmentedAMM,
  mode: SwapFormModes,
  defaultValues: Partial<SwapFormState> = {}
): SwapFormData => {
  const defaultLeverage = !isUndefined(defaultValues.leverage) ? defaultValues.leverage : 10;
  const defaultMargin = !isUndefined(defaultValues.margin) ? defaultValues.margin : 0;
  const defaultMarginAction = defaultValues.marginAction || SwapFormMarginAction.ADD;
  const defaultNotional = !isUndefined(defaultValues.notional) ? defaultValues.notional : 0;
  const defaultPartialCollateralization = !isUndefined(defaultValues.partialCollateralization) 
    ? defaultValues.partialCollateralization 
    : true;

  const { agent } = useAgent();
  const balance = useBalance(amm);
  const [leverage, setLeverage] = useState<SwapFormState['leverage']>(defaultLeverage);
  const [margin, setMargin] = useState<SwapFormState['margin']>(defaultMargin);
  const [marginAction, setMarginAction] = useState<SwapFormMarginAction>(defaultMarginAction);
  const minRequiredMargin = useMinRequiredMargin(amm);
  const [notional, setNotional] = useState<SwapFormState['notional']>(defaultNotional);
  const [partialCollateralization, setPartialCollateralization] = useState<boolean>(defaultPartialCollateralization);
  const { swapInfo } = useAMMContext();
  const tokenApprovals = useTokenApproval(amm);

  const [errors, setErrors] = useState<SwapFormData['errors']>({});
  const [isValid, setIsValid] = useState<boolean>(false);
  const touched = useRef<string[]>([]);

  const action = s.getFormAction(mode, partialCollateralization, agent);
  const isAddingMargin = mode === SwapFormModes.EDIT_MARGIN && marginAction === SwapFormMarginAction.ADD;
  const isFCMAction = action === SwapFormActions.FCM_SWAP || action === SwapFormActions.FCM_UNWIND;
  const isRemovingMargin = mode === SwapFormModes.EDIT_MARGIN && marginAction === SwapFormMarginAction.REMOVE;
  const isTradeVerified = !!swapInfo.result && !swapInfo.loading && !swapInfo.errorMessage;
  
  const approvalsNeeded = s.approvalsNeeded(action, tokenApprovals, isRemovingMargin)
  const hintState = s.getHintState(action, errors, isValid, isRemovingMargin, tokenApprovals, swapInfo.errorMessage, swapInfo.loading);
  const submitButtonState = s.getSubmitButtonState(mode, tokenApprovals, action, agent, isRemovingMargin, swapInfo.loading);

  // Load the swap summary info
  useEffect(() => {
    if (!approvalsNeeded && !isUndefined(notional) && notional !== 0) {
      switch (action) {
        case SwapFormActions.SWAP: {
          swapInfo.call({ notional, type: GetInfoType.NORMAL_SWAP});
          break;
        }

        case SwapFormActions.FCM_SWAP: {
          swapInfo.call({ notional, type: GetInfoType.FCM_SWAP });
          break;
        }

        // case SwapFormActions.FCM_UNWIND: {
        //   swapInfo.call({ notional, type: GetInfoType.FCM_UNWIND });
        //   break;
        // }
      } 
    }
  }, [swapInfo.call, notional, agent, approvalsNeeded, partialCollateralization, marginAction]);

  // set the leverage back to 50% if variables change
  useEffect(() => {
    const minMargin = swapInfo.result?.marginRequirement;
    if(isNumber(notional) && isNumber(minMargin)) {
      const cappedMinMargin = Math.max(minMargin, 0.1);
      const newLeverage = parseFloat(((notional / cappedMinMargin) / 2).toFixed(2));
      setLeverage(newLeverage);
    }
  }, [notional, swapInfo.result?.marginRequirement]);

  // Validate the form after values change
  useEffect(() => {
    if(touched.current.length) {
      void validate();
    }
  }, [
    margin, 
    marginAction, 
    notional, 
    partialCollateralization,
    swapInfo.result?.marginRequirement, 
    swapInfo.result?.fee,
    isValid
  ])

  const addError = (err: Record<string, string>, name: string, message: string) => {
    if(touched.current.includes(name)) {
      err[name] = message;
    }
  };

  const updateLeverage = (newLeverage: SwapFormState['leverage']) => {
    if(!touched.current.includes('leverage')) {
      touched.current.push('leverage');
    }
    setLeverage(newLeverage);

    if(!isUndefined(notional)) {
      if(!touched.current.includes('margin')) {
        touched.current.push('margin');
      }
      setMargin(parseFloat((notional / newLeverage).toFixed(2)));
    }
  }

  const updateMargin = (newMargin: SwapFormState['margin']) => {
    if(!touched.current.includes('margin')) {
      touched.current.push('margin');
    }

    setMargin(newMargin);

    if(!isUndefined(newMargin) && !isUndefined(notional)) {
      setLeverage(notional / newMargin);
    }
  }

  const updateMarginAction = (value: SwapFormState['marginAction']) => {
    if(!touched.current.includes('marginAction')) {
      touched.current.push('marginAction');
    }
    setMarginAction(value);
  }

  const updateNotional = (value: SwapFormState['notional']) => {
    if(!touched.current.includes('notional')) {
      touched.current.push('notional');
    }
    setNotional(value);
  }

  const updatePartialCollateralization = (value: SwapFormState['partialCollateralization']) => {
    if(!touched.current.includes('partialCollateralization')) {
      touched.current.push('partialCollateralization');
    }
    setPartialCollateralization(value);
  }

  const validate = async () => {
    if(mode === SwapFormModes.NEW_POSITION) {
      return await validateNewPosition();
    } else {
      return await validateEditMargin();
    }
  }

  const validateNewPosition = async () => {
    const err: Record<string, string> = {};
    let valid = true;

    if(isUndefined(notional) || notional === 0) {
      valid = false;
      addError(err, 'notional', 'Please enter an amount');
    }

    if((action === SwapFormActions.SWAP || action === SwapFormActions.UPDATE)) {
      if(isUndefined(margin)) {
        valid = false;
        addError(err, 'margin', 'Please enter an amount');
      }
    }

    // Check the user has enough balance
    if(action === SwapFormActions.SWAP || action === SwapFormActions.UPDATE) {
      if(margin !== 0 && await hasEnoughUnderlyingTokens(amm, margin) === false) {
        valid = false;
        addError(err, 'margin', 'Insufficient funds');
      }
    }
    else {
      if(action === SwapFormActions.FCM_SWAP) {
        if(notional !== 0 && await hasEnoughTokens(amm, swapInfo.result?.fee, notional) === false) {
          valid = false;
          addError(err, 'notional', 'Insufficient funds');
        }
      } else {
        if(await hasEnoughUnderlyingTokens(amm, swapInfo.result?.fee) === false) {
          valid = false;
          addError(err, 'notional', 'Insufficient funds');
        }
      }
    }

    // Check that the input margin is >= minimum required margin
    if(action === SwapFormActions.SWAP || action === SwapFormActions.UPDATE) {
      if(lessThan(margin, swapInfo.result?.marginRequirement) === true) {
        valid = false;
        addError(err, 'margin', 'Not enough margin');
      }
    }

    setErrors(err);
    setIsValid(valid);
    return valid;
  };

  const validateEditMargin = async () => {
    const err: Record<string, string> = {};
    let valid = true;

    if(isUndefined(margin) || margin === 0) {
      valid = false;
      addError(err, 'margin', 'Please enter an amount');
    }

    // check user has sufficient funds
    if(marginAction === SwapFormMarginAction.ADD) {
      if(margin !== 0 && await hasEnoughUnderlyingTokens(amm, margin) === false) {
        valid = false;
        addError(err, 'margin', 'Insufficient funds');
      }
    }

    // Check that the input margin is >= minimum required margin if removing margin
    if(position && !isUndefined(minRequiredMargin) && marginAction === SwapFormMarginAction.REMOVE) {
      if(!isUndefined(margin) && margin !== 0) {
        const originalMargin = amm.descale(BigNumber.from(position.margin.toString()));
        const remainingMargin = originalMargin - margin;

        if(remainingMargin < minRequiredMargin) {
          valid = false;
          addError(err, 'margin', 'Withdrawl amount too high');
        }
      }
    }
    
    setErrors(err);
    setIsValid(valid);
    return valid;
  };

  return {
    action,
    approvalsNeeded,
    balance,
    errors,
    hintState,
    isAddingMargin,
    isFCMAction,
    isTradeVerified,
    isRemovingMargin,
    isValid,
    minRequiredMargin,
    setLeverage: updateLeverage,
    setMargin: updateMargin,
    setMarginAction: updateMarginAction,
    setNotional: updateNotional,
    setPartialCollateralization: updatePartialCollateralization,
    swapInfo: {
      data: swapInfo.result || undefined,
      errorMessage: swapInfo.errorMessage || undefined,
      loading: swapInfo.loading
    },
    state: {
      leverage,
      margin,
      marginAction,
      notional,
      partialCollateralization
    },
    submitButtonState,
    tokenApprovals,
    validate
  }
}

export default useSwapForm;