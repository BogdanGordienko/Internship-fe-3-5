import { all, put, call, fork, take, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as eventChannels from '../eventChannels/eventChannels';
import * as chatMethods from '../../firebase/chatMethods'
import actionTypes from '../../constants/actionTypes';

export default function* watchChatSaga() {
    yield all([
        fork(startListener),
        takeEvery(actionTypes.SEND_MESSAGE, sendMessages),
        takeEvery(actionTypes.SET_USER_MESSAGE, setUserMessages)
    ]);
};

export function* sendMessages({ payload }) {
    yield call(chatMethods.sendMessageRequest, payload);
}

export function* setUserMessages({ payload }) {
    if (payload.length) {
        const filteredMessagesList = payload.filter(message => message.createdAt);

        filteredMessagesList.length && (yield put(actions.setUsersMessagesStore(filteredMessagesList)));
    }
}

export function* startListener() {
    const chatMessagesChannel = eventChannels.chatMessagesEventChannel();

    while (true) {
        const eventAction = yield take(chatMessagesChannel);

        yield put(eventAction);
    }
}
