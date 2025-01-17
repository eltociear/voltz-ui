import { createAsyncThunk } from '@reduxjs/toolkit';
import { RankType, SupportedChainId } from '@voltz-protocol/v1-sdk';
import { providers } from 'ethers';

import { Season } from '../../../../../hooks/season/types';
import { getCommunitySbt } from '../../../../../ui/pages/Profile/helpers';
import { rejectThunkWithError } from '../../../helpers';

export const fetchRankingsThunk = createAsyncThunk<
  Awaited<RankType[] | ReturnType<typeof rejectThunkWithError>>,
  {
    chainId: SupportedChainId;
    signer: providers.JsonRpcSigner | null;
    seasonId: Season['id'];
  }
>('tradingLeague/fetchRankings', async ({ seasonId, signer, chainId }, thunkAPI) => {
  try {
    const SBT = getCommunitySbt(signer, chainId);
    const { traderRankResults } = await SBT.getRanking(seasonId);
    return traderRankResults;
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});
