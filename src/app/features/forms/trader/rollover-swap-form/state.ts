import { AMM, Position } from '@voltz-protocol/v1-sdk';

type ThunkStatus = 'idle' | 'pending' | 'success' | 'error';

export type SliceState = {
  submitButton: {
    state: 'rollover' | 'not-enough-balance' | 'connect-wallet' | 'approve' | 'approving';
    disabled: boolean;
    message: {
      text: string | null;
      isError: boolean;
    };
  };
  // target/next AMM
  amm: AMM | null;
  // matured/previous AMM
  previousAMM: AMM | null;
  // matured/previous position
  previousPosition: Position | null;
  walletBalance: {
    value: number;
    status: ThunkStatus;
  };
  walletTokenAllowance: {
    value: number;
    status: ThunkStatus;
  };
  // User-agnostic swap info about pool
  poolSwapInfo: {
    availableNotional: Record<'fixed' | 'variable', number>;
    maxLeverage: Record<'fixed' | 'variable', number>;
    status: ThunkStatus;
  };
  userInput: {
    // Side chosen by user in the UI
    mode: 'fixed' | 'variable';
    // User-inputted notional amount
    notionalAmount: {
      value: number;
      error: string | null;
    };
    // User-inputted margin amount
    marginAmount: {
      value: number;
      error: string | null;
    };
    leverage: number | null;
  };
  // State of prospective swap
  prospectiveSwap: {
    // Leverage options
    leverage: {
      options: number[];
      maxLeverage: string;
    };
    infoPostSwap: {
      value: {
        // Margin requirement for prospective swap
        marginRequirement: number;
        // Max margin that can be withdrawn after prospective swap
        maxMarginWithdrawable: number;
        // Average fixed rate obtained by the prospective swap
        averageFixedRate: number;

        // Token balance deltas resulted by prospective swap
        fixedTokenDeltaBalance: number;
        variableTokenDeltaBalance: number;
        fixedTokenDeltaUnbalanced: number;

        // Extra information about prospective swap
        fee: number;
        slippage: number;
        gasFeeETH: number;
      };
      status: ThunkStatus;
    };
  };
  swapConfirmationFlow: {
    step: 'rolloverConfirmation' | 'waitingForRolloverConfirmation' | 'rolloverCompleted' | null;
    error: string | null;
    txHash: string | null;
  };
  showLowLeverageNotification: boolean;
};

export const initialState: SliceState = {
  submitButton: {
    state: 'connect-wallet',
    disabled: true,
    message: {
      text: null,
      isError: false,
    },
  },
  amm: null,
  previousAMM: null,
  previousPosition: null,
  walletBalance: {
    value: 0,
    status: 'idle',
  },
  walletTokenAllowance: {
    value: 0,
    status: 'idle',
  },
  poolSwapInfo: {
    availableNotional: {
      fixed: 0,
      variable: 0,
    },
    maxLeverage: {
      fixed: 0,
      variable: 0,
    },
    status: 'idle',
  },
  userInput: {
    mode: 'fixed',
    notionalAmount: {
      value: 0,
      error: null,
    },
    marginAmount: {
      value: 0,
      error: null,
    },
    leverage: null,
  },
  prospectiveSwap: {
    leverage: {
      options: [0, 0, 0],
      maxLeverage: '--',
    },
    infoPostSwap: {
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
    },
  },
  swapConfirmationFlow: {
    step: null,
    error: null,
    txHash: null,
  },
  showLowLeverageNotification: false,
};