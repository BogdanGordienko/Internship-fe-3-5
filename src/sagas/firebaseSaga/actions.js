import actionTypes from '../../constants/actionTypes';

export const setAuthUserStore = payload => ({ type: actionTypes.SET_AUTH_USER_STORE, payload });
export const setDataToLocalStorage = payload => ({ type: actionTypes.SET_DATA_TO_LOCAL_STORAGE, payload });
export const removeDataFromLocalStorage = payload => ({ type: actionTypes.REMOVE_DATA_FROM_LOCAL_STORAGE, payload });
export const setAuthUserDatabaseIdStore = payload => ({ type: actionTypes.SET_AUTH_USER_DATABASE_ID_STORE, payload });
