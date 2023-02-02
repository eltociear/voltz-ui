import React from 'react';

import { formatCurrency } from '../../../../../utilities/number';
import { FormActionButton } from '../FormActionButton/FormActionButton';
import { GasCost } from '../GasCost/GasCost';
import { HintText } from '../HintText/HintText';
import {
  ButtonBox,
  CancelButton,
  ContentBox,
  DepositBudgetTextTypography,
  DepositBudgetUnderlyingTypography,
  DepositBudgetUSDCurrencyTypography,
  DepositBudgetValueBox,
  DepositFeeContentBox,
  DescriptionTypography,
  TitleTypography,
} from './ConfirmDepositModalContent.styled';

type Props = {
  onProceed: () => void;
  onCancel: () => void;
  hintText: string;
  hintTextSuccess: boolean;
  hintTextError: boolean;
  hintTextPrefixText?: string;
  hintTextSuffixText?: string;
  submitText: string;
  disabled: boolean;
  loading: boolean;
  success: boolean;
  gasCost: number;
  depositFeeUSD: number;
  depositFeeUnderlying: number;
  token: string;
};

export const ConfirmDepositModalContent: React.FunctionComponent<Props> = ({
  onCancel,
  onProceed,
  loading,
  success,
  submitText,
  disabled,
  gasCost,
  depositFeeUSD,
  depositFeeUnderlying,
  token,
  hintText,
  hintTextSuccess,
  hintTextError,
  hintTextPrefixText,
  hintTextSuffixText,
}) => (
  <ContentBox data-testid="ConfirmDepositModalContent-ContentBox">
    <TitleTypography data-testid="ConfirmDepositModalContent-TitleTypography">
      Deposit
    </TitleTypography>
    <DescriptionTypography data-testid="ConfirmDepositModalContent-DescriptionTypography">
      When depositing funds in the Optimiser, users pay a contribution to the batch budget fund.
      Batches are done to reduce the gas cost of depositing in pools by splitting the costs between
      those depositing funds.
    </DescriptionTypography>
    <GasCost gasCost={gasCost} />
    <DepositFeeContentBox>
      <DepositBudgetTextTypography>BATCH FEE&nbsp;</DepositBudgetTextTypography>
      {depositFeeUSD === -1 || depositFeeUnderlying === -1 ? (
        <DepositBudgetValueBox>
          <DepositBudgetTextTypography data-testid="ConfirmDepositModalContent-DepositFeeLoading">
            ---
          </DepositBudgetTextTypography>
        </DepositBudgetValueBox>
      ) : (
        <DepositBudgetValueBox>
          <DepositBudgetUnderlyingTypography data-testid="ConfirmDepositModalContent-DepositBudgetUnderlyingTypography">
            {formatCurrency(depositFeeUnderlying)}&nbsp;
            {token.toUpperCase()}
          </DepositBudgetUnderlyingTypography>
          <DepositBudgetTextTypography data-testid="ConfirmDepositModalContent-DepositBudgetTextTypography">
            <DepositBudgetUSDCurrencyTypography>$</DepositBudgetUSDCurrencyTypography>
            {formatCurrency(depositFeeUSD)} USD
          </DepositBudgetTextTypography>
        </DepositBudgetValueBox>
      )}
    </DepositFeeContentBox>

    <ButtonBox>
      <FormActionButton
        dataTestId="ConfirmDepositModalContent-DepositButton"
        disabled={disabled}
        loading={loading}
        success={success}
        variant="blue"
        onClick={onProceed}
      >
        {submitText}
      </FormActionButton>
      <CancelButton
        data-testid="ConfirmDepositModalContent-CancelButton"
        disabled={loading}
        onClick={onCancel}
      >
        CANCEL
      </CancelButton>
    </ButtonBox>
    <HintText
      error={hintTextError}
      loading={loading}
      prefixText={hintTextPrefixText}
      success={hintTextSuccess}
      suffixText={hintTextSuffixText}
      text={hintText}
    />
  </ContentBox>
);
