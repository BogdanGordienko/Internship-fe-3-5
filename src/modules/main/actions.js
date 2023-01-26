import actionTypes from '../../constants/actionTypes';

export const sendMessage = payload => ({ type: actionTypes.SEND_MESSAGE, payload });
export const setIsShowResults = payload => ({ type: actionTypes.SET_IS_SHOW_RESULTS, payload });
export const setIsReadyForGame = payload => ({ type: actionTypes.SET_IS_READY_FOR_GAME, payload });
export const setAnswersListStore = payload => ({ type: actionTypes.SET_ANSWERS_LIST_STORE, payload });
export const setCorrectAnswersCountStore = payload => ({ type: actionTypes.SET_CORRECT_ANSWERS_COUNT_STORE, payload });