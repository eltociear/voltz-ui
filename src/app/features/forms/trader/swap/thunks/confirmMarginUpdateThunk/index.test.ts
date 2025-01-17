import { rejectThunkWithError } from '../../../../../helpers';
import { updateMarginService } from '../../../../common';
import { getExistingPositionId, getProspectiveSwapMargin } from '../../utils';
import { confirmMarginUpdateThunkHandler } from '.';

jest.mock('../../../../../helpers');
jest.mock('../../utils');
jest.mock('../../../../common');

jest.mock('../../../../../../../utilities/amm', () => ({
  isV2AMM: jest.fn().mockReturnValue(false),
}));

describe('confirmMarginUpdateThunkHandler', () => {
  const mockState = {
    swapForm: {
      amm: {
        updatePositionMargin: jest.fn(),
        signer: jest.fn(),
      },
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return undefined when amm is not defined', async () => {
    const getState = jest.fn(() => ({ swapForm: { amm: undefined } }));
    const result = await confirmMarginUpdateThunkHandler(null as never, { getState } as never);
    expect(result).toBeUndefined();
  });

  it('should call updateMarginService with the correct arguments', async () => {
    const margin = 123;
    const positionId = 1;
    const mockSigner = jest.fn();
    const getState = jest.fn(() => ({
      swapForm: {
        amm: {
          signer: mockSigner,
        },
      },
    }));

    const expectedArgs = {
      fixedLow: 1,
      fixedHigh: 999,
      margin,
      amm: getState().swapForm.amm,
      signer: getState().swapForm.amm.signer,
      positionId,
    };

    (getProspectiveSwapMargin as jest.Mock).mockReturnValue(margin);
    (getExistingPositionId as jest.Mock).mockReturnValue(positionId);
    (updateMarginService as jest.Mock).mockReturnValue({ txHash: '0x123' });

    const result = await confirmMarginUpdateThunkHandler(null as never, { getState } as never);

    expect(getProspectiveSwapMargin).toHaveBeenCalledWith(getState().swapForm);
    expect(updateMarginService).toHaveBeenCalledWith(expectedArgs);
    expect(result).toEqual({ txHash: '0x123' });
  });

  it('should call rejectThunkWithError when an error is thrown', async () => {
    const positionId = 1;
    const error = new Error('test error');
    const getState = jest.fn(() => mockState);
    (updateMarginService as jest.Mock).mockRejectedValue(error);
    (getExistingPositionId as jest.Mock).mockReturnValue(positionId);

    await confirmMarginUpdateThunkHandler(null as never, { getState } as never);

    expect(rejectThunkWithError).toHaveBeenCalledWith(expect.anything(), error);
  });
});
