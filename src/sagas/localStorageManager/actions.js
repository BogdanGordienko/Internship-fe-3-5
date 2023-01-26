import actionTypes from '../../constants/actionTypes';

export const setCorrectAnswerDocIdStore = payload => ({ type: actionTypes.SET_CORRECT_ANSWER_DOC_ID_STORE, payload });
export const setUserDataFromLocalstorageStore = payload => ({ type: actionTypes.SET_USER_DATA_FROM_LOCAL_STORAGE_STORE, payload });
export const setQuizDataFromLocalstorageStore = payload => ({ type: actionTypes.SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE, payload });
