import React from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import { UseAsyncFunctionResult, useTokenApproval } from '../../../hooks';
import { FormPanel } from '@components/interface';
import {
  MaskedIntegerField,
  InputTokenLabel,
  IconLabel,
  ProtocolInformation,
} from '@components/composite';
import { SubmitControls, FixBorrow } from './components';
import { SystemStyleObject, Theme } from '../../../theme';

import {
  Agents,
  BorrowFormSubmitButtonHintStates,
  BorrowFormSubmitButtonStates,
} from '../../../contexts';
import { formatCurrency, getPoolButtonId } from '../../../utilities';

export type BorrowProps = {
  protocol?: string;
  endDate?: DateTime;
  onChangeNotional: (value: number) => void;
  underlyingTokenName?: string;
  approvalsNeeded: boolean;
  isFormValid: boolean;
  isTradeVerified: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  tokenApprovals: ReturnType<typeof useTokenApproval>;
  tradeInfoErrorMessage?: string;
  variableDebt: UseAsyncFunctionResult<unknown, number | void>;
  selectedFixedDebt: number;
  selectedFixedDebtPercentage: number;
  selectedVariableDebt: number;
  selectedVariableDebtPercentage: number;
  errors: Record<string, string>;
  hintState: BorrowFormSubmitButtonHintStates;
  submitButtonState: BorrowFormSubmitButtonStates;
  margin: number;
  swapSummaryLoading: boolean;
  balance: number;
  variableApy?: number;
  fixedApr?: number;
};

const BorrowForm: React.FunctionComponent<BorrowProps> = ({
  protocol,
  endDate,
  errors,
  onChangeNotional,
  underlyingTokenName,
  approvalsNeeded,
  isFormValid,
  isTradeVerified,
  onCancel,
  onSubmit,
  tokenApprovals,
  tradeInfoErrorMessage,
  variableDebt,
  selectedFixedDebt,
  selectedFixedDebtPercentage,
  selectedVariableDebt,
  selectedVariableDebtPercentage,
  hintState,
  submitButtonState,
  margin,
  swapSummaryLoading,
  balance,
  variableApy,
  fixedApr,
}) => {
  const bottomSpacing: SystemStyleObject<Theme> = {
    marginBottom: (theme) => theme.spacing(10),
  };

  let formattedBalance;
  if (protocol?.toUpperCase().includes('ETH')) {
    formattedBalance = formatCurrency(balance, false, false, 6, 6);
  } else {
    formattedBalance = formatCurrency(balance);
  }

  let formattedMargin;
  if (protocol?.toUpperCase().includes('ETH')) {
    formattedMargin = formatCurrency(margin, false, false, 6, 6);
  } else {
    formattedMargin = formatCurrency(margin);
  }

  return (
    <FormPanel isBorrowForm={true}>
      <Box sx={{ marginBottom: (theme) => theme.spacing(8) }}>
        <ProtocolInformation
          protocol={protocol}
          isBorrowForm={true}
          endDate={endDate}
          variableApy={variableApy}
          fixedApr={fixedApr}
        />
      </Box>

      <Box sx={{ marginBottom: (theme) => theme.spacing(2) }}>
        <FixBorrow
          variableDebt={variableDebt}
          underlyingTokenName={underlyingTokenName}
          selectedFixedDebt={selectedFixedDebt}
          selectedFixedDebtPercentage={selectedFixedDebtPercentage}
          selectedVariableDebt={selectedVariableDebt}
          selectedVariableDebtPercentage={selectedVariableDebtPercentage}
          handleChange={onChangeNotional}
          swapSummaryLoading={swapSummaryLoading}
          error={!!errors['slider']}
          errorText={errors['slider']}
        />
      </Box>

      <Box sx={bottomSpacing}>
        <MaskedIntegerField
          allowDecimals
          allowNegativeValue={false}
          suffix={<InputTokenLabel tokenName={underlyingTokenName || ''} />}
          suffixPadding={90}
          label={
            <IconLabel
              label={'margin required to fix rate'}
              icon="information-circle"
              info={
                'Margin required to enter position where you are paying the fixed rate on the selected amount (includes fees)'
              }
            />
          }
          value={formattedMargin}
          subtext={`WALLET BALANCE: ${formattedBalance}`}
          disabled={true}
          error={!!errors['margin']}
          errorText={errors['margin']}
        />
      </Box>

      {/* <SubmitControls
        approvalsNeeded={approvalsNeeded}
        isFormValid={isFormValid}
        isTradeVerified={isTradeVerified}
        onCancel={onCancel}
        onSubmit={onSubmit}
        protocol={protocol}
        tokenApprovals={tokenApprovals}
        tradeInfoErrorMessage={tradeInfoErrorMessage}
        underlyingTokenName={underlyingTokenName}
      /> */}
      <SubmitControls
        approvalsNeeded={approvalsNeeded}
        hintState={hintState}
        isFormValid={isFormValid}
        isTradeVerified={isTradeVerified}
        onCancel={onCancel}
        onSubmit={onSubmit}
        gaButtonId={getPoolButtonId('', '', '', Agents.VARIABLE_TRADER, true, '')}
        submitButtonState={submitButtonState}
        // swapInfoLoading={swapInfoLoading}
        tokenApprovals={tokenApprovals}
        tradeInfoErrorMessage={tradeInfoErrorMessage}
        underlyingTokenName={underlyingTokenName}
      />
    </FormPanel>
  );
};

export default BorrowForm;
