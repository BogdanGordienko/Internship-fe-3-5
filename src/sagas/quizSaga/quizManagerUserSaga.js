import { all, call, delay, put, select, takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as actions from './actions';
import * as selectors from './selectors';
import * as firebaseMethods from '../../firebase/quizMethods';
import { sendGetRequest } from '../../API/sendGetRequest';
import { questionsUrl } from '../../API/constants';
import firebaseCollectionTypes from '../../firebase/constants';

export default function* watchQuizUserSaga() {
    yield all([
        call(init),
        takeEvery(actionTypes.SET_QUESTIONS, startQuiz),
        takeEvery(actionTypes.SET_IS_READY_FOR_GAME, setIsReadyForGameRequest),
        takeEvery(actionTypes.SET_IS_SHOW_RESULTS, setIsShowResults),
        takeEvery(actionTypes.SET_USER_RESULTS_RESPONSE, setUserResultsResponse),
    ]);
};

export function* setIsShowResults({ payload }) {
    const correctAnswersCountDocId = yield select(selectors.getCorrectAnswersCountDocId);

    yield put(actions.removeItemFromLocalStorage('correctAnswersCountDocId'));
    correctAnswersCountDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.USERS_RESULTS,
        docId: correctAnswersCountDocId,
    }));
    yield put(actions.clearUsersResultsStore());
    yield put(actions.setCorrectAnswerDocIdStore(''));
    yield put(actions.clearCorrectAnswerCountStore());
    yield put(actions.clearAnswersListStore());
    yield put(actions.setIsShowResultsStore(payload));
}

export function* setUserResultsResponse({ payload }) {
    yield put(actions.setUserResultsResponseStore(payload));
}

export function* init() {
    yield put(actions.getQuizDataFromLocalStorage());
}

export function* clearAllCurrentUserReadinessData() {
    const userReadinessDocId = yield select(selectors.getUserReadinessDocId);

    yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.USERS_READINESS,
        docId: userReadinessDocId
    });

    yield put(actions.setDataToLocalStorage({
        fieldType: 'quizData',
        data: {
            currentUserReadiness: [],
            isUserReadyToStartQuiz: false,
        } }));

    yield put(actions.setIsUserReadyToStartQuizStore(false));
}

export function* clearAllQuestionsData() {
    yield put(actions.clearCurrentQuestionStore());
    yield put(actions.clearQuestionsStore());

    const questionsDocId = yield select(selectors.getQuestionsDocId);

    questionsDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.QUESTIONS,
        docId: questionsDocId
    }));
}

export function* setIsReadyForGameRequest() {
    const isUserReadyForGame = yield select(selectors.getIsReadyForGame);

    yield put(actions.getItemFromLocalStorageToStore('correctAnswersCountDocId'));
    yield put(actions.clearUsersResultsStore());

    const correctAnswersCountDocId = yield select(selectors.getCorrectAnswersCountDocId);

    yield put(actions.removeItemFromLocalStorage('correctAnswersCountDocId'));
    correctAnswersCountDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.USERS_RESULTS,
        docId: correctAnswersCountDocId,
    }));

    if (!isUserReadyForGame) {
        const response = yield call(firebaseMethods.sendAddUserReadinessRequest);

        yield put(actions.setCurrentUserReadinessStore(response));
        yield put(actions.setIsUserReadyToStartQuizStore(true));
        yield put(actions.setDataToLocalStorage({
            fieldType: 'quizData',
            data: {
                isUserReadyToStartQuiz: true,
                currentUserReadiness: response,
            } }));

        const isUsersReadyToStartQuiz = yield call(firebaseMethods.checkIsUsersReadyToStartQuiz);

        isUsersReadyToStartQuiz && (yield call(initializeBeforeStartQuiz));

        return;
    }

    yield call(clearAllCurrentUserReadinessData);
}

export function* initializeBeforeStartQuiz() {
    try {
        const data = yield call(sendGetRequest, questionsUrl)
        const { results: questions } = data;
        const questionsDocId = yield call(firebaseMethods.sendAddQuestionsRequest, questions);

        yield put(actions.setQuestionsDocIdStore(questionsDocId));
    } catch (error) {
        console.error('error', error);
    }
}

export function* finishQuizAndSetResults() {
    yield call(clearAllCurrentUserReadinessData);
    yield put(actions.setIsShowResultsStore(true));
    yield call(clearAllQuestionsData);

    const correctAnswersCount = yield select(selectors.getCorrectAnswersCount);
    const correctAnswersCountDocId = yield call(firebaseMethods.sendAddUserResultsRequest, correctAnswersCount);

    if (correctAnswersCountDocId) {
        yield put(actions.setDataToLocalStorage({
            fieldType: 'correctAnswersCountDocId',
            data: correctAnswersCountDocId,
        }));
    }

    yield put(actions.setCorrectAnswerDocIdStore(correctAnswersCountDocId));
}

export function* startQuiz({ payload: questionsList }) {
    if (!questionsList) {
        return;
    }

    yield put(actions.setQuestionsListStore(questionsList));

    const questions = yield select(selectors.getQuestionsList);

    for(let question of questions) {
        yield put(actions.setCurrentQuestionStore(question));

        yield delay(10000);
    }

    yield call(finishQuizAndSetResults);
}
