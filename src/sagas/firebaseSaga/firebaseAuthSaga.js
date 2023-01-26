import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as firebaseAuthMethods from '../../firebase/authorizationMethods';
import * as selectors from './selectors';
import * as actions from './actions';
import * as firebaseQuizMethods from '../../firebase/quizMethods';
import firebaseCollectionTypes from '../../firebase/constants';

export default function* firebaseAuthSagaWatcher() {
    yield takeEvery(actionTypes.SIGN_OUT, singOut);
    yield takeEvery(actionTypes.SIGN_IN_WITH_GOOGLE, singIn);
}

export function* singIn() {
    const userId = yield select(selectors.getUserId);

    if (!!userId) {
        return
    }

    try {
        const { uid, docId } = yield call(firebaseAuthMethods.getFirebaseSignInRequest);

        yield put(actions.setAuthUserStore(uid));
        yield put(actions.setAuthUserDatabaseIdStore(docId));
        yield put(actions.setDataToLocalStorage({ fieldType: 'authData', data: { uid, docId } }));
    } catch (error) {
        console.error('error', error)
    }
}

export function* singOut() {
    const docId = yield select(selectors.getDocId);
    const userReadinessDocId = yield select(selectors.getUserReadinessDocId);

    userReadinessDocId && (yield call(firebaseQuizMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.USERS_READINESS,
        docId: userReadinessDocId,
    }));

    try {
        yield call(firebaseAuthMethods.firebaseSignOut, docId);
        yield put(actions.setAuthUserStore(''));
        yield put(actions.removeDataFromLocalStorage());
    } catch(error) {
        console.error('error', error)
    }
}
