import * as React from 'react';

import { resetStateAction } from '../../../app/features/forms/trader/swap';
import { useAppDispatch } from '../../../app/hooks';
import { routes } from '../../../routes/paths';
import { GenericError } from '../../components/GenericError';
import { NoAMMFound } from '../../components/NoAMMFound';
import { Page } from '../../components/Page';
import { PageLoading } from '../../components/PageLoading';
import { Form } from './Form';
import { useSwapFormAMM } from './hooks/useSwapFormAMM';
import { Main } from './Main';

export const SwapFormPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const { noAMMFound, loading, error } = useSwapFormAMM();

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    };
  }, []);

  return (
    <Page
      errorSlot={error ? <GenericError to={`/${routes.POOLS}`} /> : undefined}
      mainSlot={<Main />}
      notFoundSlot={noAMMFound ? <NoAMMFound to={`/${routes.POOLS}`} /> : undefined}
      pageLoadingSlot={loading ? <PageLoading /> : undefined}
      rightSlot={<Form />}
    />
  );
};
