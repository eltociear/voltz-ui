import { ContractReceipt, providers } from 'ethers';
import { call, put } from 'redux-saga/effects';
import { DateTime } from 'luxon';

import { Agents } from '@components/contexts';
import { getErrorMessage } from '@utilities';
import { FCMSwapAction } from '../../types';
import { deserializeAmm, getSigner } from '../../utilities';
import * as actions from '../../actions';


function* fcmSwapSaga(action: FCMSwapAction) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const signer: providers.JsonRpcSigner | null = yield getSigner();

    if (!signer) {
        return;
    }

    const amm = deserializeAmm(action.payload.amm, signer);

    if (!amm) {
        return;
    }

    const {id, notional} = action.payload.transaction; 

    let result: ContractReceipt | void;
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        result = yield call([amm, 'fcmSwap'], {
            notional,
        } );
    } catch (error) {
        yield put(
            actions.updateTransaction({
                id,
                failedAt: DateTime.now().toISO(),
                failureMessage: getErrorMessage(error), 
            })
        );
        return;
    }

    if (!result) {
        yield put(
            actions.updateTransaction({id, failedAt: DateTime.now().toISO(), failureMessage: 'error'}),
        );
    } else {
        yield put(
            actions.updateTransaction({id, succeededAt: DateTime.now().toISO(), txid: result.transactionHash })
        );
      }    
    }

    export default fcmSwapSaga;