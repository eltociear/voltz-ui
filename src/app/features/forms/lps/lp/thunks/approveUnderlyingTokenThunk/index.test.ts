import { rejectThunkWithError } from '../../../../../helpers/reject-thunk-with-error';
import { approveUnderlyingToken } from '../../../../common';
import { approveUnderlyingTokenThunkHandler } from './index';

jest.mock('../../../../../helpers/reject-thunk-with-error', () => ({
  rejectThunkWithError: jest.fn(),
}));

jest.mock('../../../../../../../utilities/amm', () => ({
  isV2AMM: jest.fn().mockReturnValue(false),
}));
jest.mock('../../../../common', () => ({
  approveUnderlyingToken: jest.fn(),
}));
describe('approveUnderlyingTokenThunkHandler', () => {
  const getStateMock = jest.fn();
  const thunkAPIMock = { getState: getStateMock };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the result of approveUnderlyingToken', async () => {
    (approveUnderlyingToken as jest.Mock).mockResolvedValue(123);
    const amm = {
      signer: true,
    };
    getStateMock.mockReturnValue({ lpForm: { amm } });

    const result = await approveUnderlyingTokenThunkHandler(null as never, thunkAPIMock as never);

    expect(result).toBe(123);
    expect(approveUnderlyingToken).toHaveBeenCalled();
    expect(getStateMock).toHaveBeenCalled();
  });

  it('should call rejectThunkWithError if there is an error', async () => {
    const error = new Error('test error');
    const rejectThunkWithErrorResult = { type: 'test' };
    (rejectThunkWithError as jest.MockedFunction<typeof rejectThunkWithError>).mockReturnValue(
      rejectThunkWithErrorResult,
    );
    (approveUnderlyingToken as jest.Mock).mockRejectedValue(error);

    const amm = {
      signer: true,
    };
    getStateMock.mockReturnValue({ lpForm: { amm } });

    const result = await approveUnderlyingTokenThunkHandler(null as never, thunkAPIMock as never);

    expect(result).toBe(rejectThunkWithErrorResult);
    expect(approveUnderlyingToken).toHaveBeenCalled();
    expect(rejectThunkWithError).toHaveBeenCalledWith(thunkAPIMock, error);
    expect(getStateMock).toHaveBeenCalled();
  });
});