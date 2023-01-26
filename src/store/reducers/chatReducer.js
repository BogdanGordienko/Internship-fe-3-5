import actionTypes from '../../constants/actionTypes';

const initialState = {
    messages: [],
};

export default function chatReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.SET_USERS_MESSAGES_STORE:
            return {
                ...state,
                messages: [...state.messages, ...payload],
            };
        default:
            return state
    }
};
