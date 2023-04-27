import { swapFormReducer } from './reducer';
import { initialState, SliceState } from './state';
import {
  approveUnderlyingTokenThunk,
  getInfoPostSwapThunk,
  getPoolSwapInfoThunk,
  getUnderlyingTokenAllowanceThunk,
  getWalletBalanceThunk,
} from './thunks';
import {
  updateLeverageOptionsAfterGetInfoPostSwap,
  updateLeverageOptionsAfterGetPoolSwapInfo,
  validateUserInputAndUpdateSubmitButton,
} from './utils';

jest.mock('./utils', () => ({
  validateUserInputAndUpdateSubmitButton: jest.fn(),
  updateLeverageOptionsAfterGetPoolSwapInfo: jest.fn(),
  updateLeverageOptionsAfterGetInfoPostSwap: jest.fn(),
}));

// Define the mock state
let testsInitialState: SliceState = initialState;

describe('swapFormReducer', () => {
  beforeEach(() => {
    testsInitialState = initialState;
    jest.clearAllMocks();
  });

  describe('getWalletBalanceThunk', () => {
    it('should update status to "pending" when getWalletBalanceThunk is pending', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getWalletBalanceThunk.pending.type,
      });
      expect(nextState.walletBalance.status).toEqual('pending');
    });

    it('should update status to "error" and set walletBalance to error state when getWalletBalanceThunk is rejected', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getWalletBalanceThunk.rejected.type,
      });
      expect(nextState.walletBalance.status).toEqual('error');
      expect(nextState.walletBalance.value).toEqual(0);
    });

    it('should update walletBalance and status to "success" when getWalletBalanceThunk is fulfilled, also make sure validateUserInputAndUpdateSubmitButton is called', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getWalletBalanceThunk.fulfilled.type,
        payload: 10,
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(1);
      expect(nextState.walletBalance.status).toEqual('success');
      expect(nextState.walletBalance.value).toEqual(10);
    });
  });

  describe('getUnderlyingTokenAllowanceThunk', () => {
    it('should update status to "pending" when getUnderlyingTokenAllowanceThunk is pending', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getUnderlyingTokenAllowanceThunk.pending.type,
      });
      expect(nextState.walletTokenAllowance.status).toEqual('pending');
    });

    it('should update status to "error" and set walletTokenAllowance to error state when getUnderlyingTokenAllowanceThunk is rejected', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getUnderlyingTokenAllowanceThunk.rejected.type,
      });
      expect(nextState.walletTokenAllowance.status).toEqual('error');
      expect(nextState.walletTokenAllowance.value).toEqual(0);
    });

    it('should update walletTokenAllowance and status to "success" when getUnderlyingTokenAllowanceThunk is fulfilled, also make sure validateUserInputAndUpdateSubmitButton is called', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getUnderlyingTokenAllowanceThunk.fulfilled.type,
        payload: 10,
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(1);
      expect(nextState.walletTokenAllowance.status).toEqual('success');
      expect(nextState.walletTokenAllowance.value).toEqual(10);
    });
  });

  describe('approveUnderlyingTokenThunk', () => {
    it('should update submitButton to "approving" when approveUnderlyingTokenThunk is pending', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: approveUnderlyingTokenThunk.pending.type,
      });
      expect(nextState.submitButton).toEqual({
        state: 'approving',
        disabled: true,
        message: {
          text: 'Waiting for confirmation...',
          isError: false,
        },
      });
    });

    it('should update submitButton to error state when approveUnderlyingTokenThunk is rejected', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: approveUnderlyingTokenThunk.rejected.type,
        payload: 'Error happened',
      });
      expect(nextState.submitButton).toEqual({
        state: 'approve',
        disabled: false,
        message: {
          text: 'Error happened',
          isError: true,
        },
      });
    });

    it('should update walletTokenAllowance and status to "success" when approveUnderlyingTokenThunk is fulfilled, also make sure validateUserInputAndUpdateSubmitButton is called', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: approveUnderlyingTokenThunk.fulfilled.type,
        payload: 10,
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(1);
      expect(nextState.walletTokenAllowance.status).toEqual('success');
      expect(nextState.walletTokenAllowance.value).toEqual(10);
    });
  });

  describe('getPoolSwapInfoThunk', () => {
    it('should update poolSwapInfo to "approving" when getPoolSwapInfoThunk is pending', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getPoolSwapInfoThunk.pending.type,
      });
      expect(nextState.poolSwapInfo).toEqual({
        availableNotional: {
          fixed: 0,
          variable: 0,
        },
        maxLeverage: {
          fixed: 0,
          variable: 0,
        },
        status: 'pending',
      });
    });

    it('should update poolSwapInfo to error state when getPoolSwapInfoThunk is rejected', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getPoolSwapInfoThunk.rejected.type,
      });
      expect(nextState.poolSwapInfo).toEqual({
        availableNotional: {
          fixed: 0,
          variable: 0,
        },
        maxLeverage: {
          fixed: 0,
          variable: 0,
        },
        status: 'error',
      });
    });

    it('should update poolSwapInfo and status to "success" when getPoolSwapInfoThunk is fulfilled, also make sure validateUserInputAndUpdateSubmitButton and updateLeverageOptionsAfterGetPoolSwapInfo is called', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getPoolSwapInfoThunk.fulfilled.type,
        payload: {
          availableNotionalFT: 1,
          availableNotionalVT: 2,
          maxLeverageFT: 3,
          maxLeverageVT: 4,
        },
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(1);
      expect(updateLeverageOptionsAfterGetPoolSwapInfo).toHaveBeenCalledTimes(1);
      expect(nextState.poolSwapInfo).toEqual({
        availableNotional: {
          fixed: 1,
          variable: 2,
        },
        maxLeverage: {
          fixed: 3,
          variable: 4,
        },
        status: 'success',
      });
    });
  });

  describe('getInfoPostSwapThunk', () => {
    it('should update poolSwapInfo to "approving" when getInfoPostSwapThunk is pending', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getInfoPostSwapThunk.pending.type,
      });
      expect(nextState.prospectiveSwap.infoPostSwap).toEqual({
        value: {
          marginRequirement: 0,
          maxMarginWithdrawable: 0,
          averageFixedRate: 0,
          fixedTokenDeltaBalance: 0,
          variableTokenDeltaBalance: 0,
          fixedTokenDeltaUnbalanced: 0,
          fee: 0,
          slippage: 0,
          gasFeeETH: 0,
        },
        status: 'pending',
      });
    });

    it('should update poolSwapInfo to error state when getInfoPostSwapThunk is rejected', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getInfoPostSwapThunk.rejected.type,
      });
      expect(nextState.prospectiveSwap.infoPostSwap).toEqual({
        value: {
          marginRequirement: 0,
          maxMarginWithdrawable: 0,
          averageFixedRate: 0,
          fixedTokenDeltaBalance: 0,
          variableTokenDeltaBalance: 0,
          fixedTokenDeltaUnbalanced: 0,
          fee: 0,
          slippage: 0,
          gasFeeETH: 0,
        },
        status: 'error',
      });
    });

    it('should update prospectiveSwap.infoPostSwap and poolSwapInfo.availableNotional and status to "success" when getInfoPostSwapThunk is fulfilled & early return is false, also make sure validateUserInputAndUpdateSubmitButton and updateLeverageOptionsAfterGetInfoPostSwap is called', () => {
      const mockedInfoPostSwap = {
        marginRequirement: 1,
        maxMarginWithdrawable: 2,
        availableNotional: 3,
        fee: 4,
        slippage: 5,
        averageFixedRate: 6,
        fixedTokenDeltaBalance: 7,
        variableTokenDeltaBalance: 8,
        fixedTokenDeltaUnbalanced: 9,
        gasFeeETH: 10,
      };

      const nextState = swapFormReducer(testsInitialState, {
        type: getInfoPostSwapThunk.fulfilled.type,
        payload: {
          notionalAmount: 11,
          swapMode: 'fixed',
          infoPostSwap: mockedInfoPostSwap,
          earlyReturn: false,
        },
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(1);
      expect(updateLeverageOptionsAfterGetInfoPostSwap).toHaveBeenCalledTimes(1);
      expect(nextState.prospectiveSwap.infoPostSwap).toEqual({
        value: {
          marginRequirement: mockedInfoPostSwap.marginRequirement,
          maxMarginWithdrawable: mockedInfoPostSwap.maxMarginWithdrawable,
          averageFixedRate: mockedInfoPostSwap.averageFixedRate,
          fixedTokenDeltaBalance: mockedInfoPostSwap.fixedTokenDeltaBalance,
          variableTokenDeltaBalance: mockedInfoPostSwap.variableTokenDeltaBalance,
          fixedTokenDeltaUnbalanced: mockedInfoPostSwap.fixedTokenDeltaUnbalanced,
          fee: mockedInfoPostSwap.fee,
          slippage: mockedInfoPostSwap.slippage,
          gasFeeETH: mockedInfoPostSwap.gasFeeETH,
        },
        status: 'success',
      });
      expect(nextState.poolSwapInfo.availableNotional['fixed']).toEqual(3);
    });

    it('should update prospectiveSwap.infoPostSwap status to "success" when getInfoPostSwapThunk is fulfilled & early return is true, also make sure validateUserInputAndUpdateSubmitButton and updateLeverageOptionsAfterGetInfoPostSwap are not called', () => {
      const nextState = swapFormReducer(testsInitialState, {
        type: getInfoPostSwapThunk.fulfilled.type,
        payload: {
          earlyReturn: true,
        },
      });

      expect(validateUserInputAndUpdateSubmitButton).toHaveBeenCalledTimes(0);
      expect(updateLeverageOptionsAfterGetInfoPostSwap).toHaveBeenCalledTimes(0);
      expect(nextState.prospectiveSwap.infoPostSwap).toEqual({
        value: {
          marginRequirement: 0,
          maxMarginWithdrawable: 0,
          averageFixedRate: 0,
          fixedTokenDeltaBalance: 0,
          variableTokenDeltaBalance: 0,
          fixedTokenDeltaUnbalanced: 0,
          fee: 0,
          slippage: 0,
          gasFeeETH: 0,
        },
        status: 'idle',
      });
    });
  });
});
