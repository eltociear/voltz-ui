import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../../../../../store';
import { rejectThunkWithError } from '../../../../../helpers/reject-thunk-with-error';
import { approveUnderlyingTokenAction } from '../../../../common';

export const approveUnderlyingTokenThunkHandler: AsyncThunkPayloadCreator<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
> = async (_, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().rolloverSwapForm.amm;
    return await approveUnderlyingTokenAction({
      amm: amm!,
      signer: amm!.signer!,
    });
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
};

export const approveUnderlyingTokenThunk = createAsyncThunk<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('rolloverSwapForm/approveUnderlyingToken', approveUnderlyingTokenThunkHandler);
