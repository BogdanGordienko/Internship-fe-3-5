import actionTypes from '../../constants/actionTypes';

export const setQuestions = payload => ({ type: actionTypes.SET_QUESTIONS, payload });
export const setUserMessage = payload => ({ type: actionTypes.SET_USER_MESSAGE, payload });
export const setUserResults = payload => ({ type: actionTypes.SET_USER_RESULTS_RESPONSE, payload });
