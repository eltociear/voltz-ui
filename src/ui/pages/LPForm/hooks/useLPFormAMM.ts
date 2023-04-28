import { AMM } from '@voltz-protocol/v1-sdk';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import {
  getInfoPostLpThunk,
  getPoolLpInfoThunk,
  getUnderlyingTokenAllowanceThunk,
  getWalletBalanceThunk,
  selectLpFormAMM,
  selectLpFormPositionsFetchingStatus,
  selectLpFormSelectedPosition,
  selectPoolLpInfoStatus,
  selectUserInputFixedLower,
  selectUserInputFixedUpper,
  setLpFormAMMAction,
  setSignerAndPositionsForAMMThunk,
  setUserInputFixedLowerAction,
  setUserInputFixedUpperAction,
} from '../../../../app/features/forms/lp-form';
import { selectChainId } from '../../../../app/features/network';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useAMMs } from '../../../../hooks/useAMMs';
import { useWallet } from '../../../../hooks/useWallet';
import { generateAmmIdForRoute, generatePoolId } from '../../../../utilities/amm';
import { getAlchemyKeyForChain } from '../../../../utilities/network/get-alchemy-key-for-chain';

export type UseLPFormAMMResult = {
  aMM: AMM | null;
  loading: boolean;
  error: boolean;
  noAMMFound: boolean;
};

export const useLPFormAMM = (): UseLPFormAMMResult => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { ammId, poolId } = useParams();
  const { aMMs, loading: aMMsLoading, error, idle } = useAMMs();
  const aMM = useAppSelector(selectLpFormAMM);
  const selectedPosition = useAppSelector(selectLpFormSelectedPosition);
  const positionsFetchingStatus = useAppSelector(selectLpFormPositionsFetchingStatus);
  const poolLpInfoStatus = useAppSelector(selectPoolLpInfoStatus);
  const chainId = useAppSelector(selectChainId);
  const queryFixedLower = searchParams.get('fixedLower');
  const queryFixedUpper = searchParams.get('fixedUpper');

  const fixedRateLower = useAppSelector(selectUserInputFixedLower);
  const fixedRateUpper = useAppSelector(selectUserInputFixedUpper);

  const [loading, setLoading] = useState(true);

  const { signer } = useWallet();

  useEffect(() => {
    if (!ammId || !poolId) {
      return;
    }
    if (error) {
      setLoading(false);
      return;
    }
    if (aMMsLoading || idle) {
      return;
    }
    const foundAMM = aMMs.find(
      (a) => ammId === generateAmmIdForRoute(a) && poolId === generatePoolId(a),
    );
    if (aMM && foundAMM && aMM.id === foundAMM.id) {
      setLoading(false);
      return;
    }

    dispatch(
      setLpFormAMMAction({
        amm: foundAMM ? foundAMM : null,
      }),
    );
    setLoading(false);
  }, [aMM, dispatch, ammId, poolId, idle, aMMs, aMMsLoading, error]);

  useEffect(() => {
    if (!aMM) {
      return;
    }
    void dispatch(getPoolLpInfoThunk());
  }, [dispatch, aMM, fixedRateLower, fixedRateUpper]);

  useEffect(() => {
    if (!aMM?.id) {
      return;
    }
    if (!chainId) {
      return;
    }
    if (error) {
      return;
    }
    if (aMMsLoading) {
      return;
    }
    void dispatch(
      setSignerAndPositionsForAMMThunk({
        signer,
        chainId,
      }),
    );
  }, [aMM?.id, dispatch, aMMsLoading, error, chainId, signer]);

  useEffect(() => {
    if (positionsFetchingStatus !== 'success') {
      return;
    }
    if (!queryFixedLower || !queryFixedUpper) {
      return;
    }
    const fixedLower = parseFloat(queryFixedLower);
    const fixedUpper = parseFloat(queryFixedUpper);
    if (isNaN(fixedLower) || isNaN(fixedUpper)) {
      return;
    }

    dispatch(
      setUserInputFixedLowerAction({
        value: fixedLower,
      }),
    );
    dispatch(
      setUserInputFixedUpperAction({
        value: fixedUpper,
      }),
    );
  }, [dispatch, positionsFetchingStatus, queryFixedLower, queryFixedUpper]);

  useEffect(() => {
    void dispatch(getWalletBalanceThunk());
    if (!chainId) {
      return;
    }
    void dispatch(
      getUnderlyingTokenAllowanceThunk({ chainId, alchemyApiKey: getAlchemyKeyForChain(chainId) }),
    );
  }, [dispatch, aMM, aMM?.signer, chainId]);

  useEffect(() => {
    void dispatch(getInfoPostLpThunk());
  }, [dispatch, aMM, aMM?.signer, selectedPosition]);

  return {
    aMM,
    loading:
      idle ||
      positionsFetchingStatus === 'idle' ||
      loading ||
      positionsFetchingStatus === 'pending',
    noAMMFound: !aMM && !loading,
    error: error || positionsFetchingStatus === 'error' || poolLpInfoStatus === 'error',
  };
};
