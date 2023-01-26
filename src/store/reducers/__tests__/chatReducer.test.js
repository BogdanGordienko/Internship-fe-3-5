import chatReducer from '../chatReducer';
import actionTypes from '../../../constants/actionTypes';

describe('chatReducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            messages: [],
        };
    });

    it('chatReducer should return correct state when action type SET_USERS_MESSAGES_STORE', () => {
        const payload = [{
            createdAt: '11111',
            displayName: 'displayName',
            photoURL:'https://.....',
            text: 'hello, World!',
            uid: '11ss1edf40o',
        }];
        const action = { type: actionTypes.SET_USERS_MESSAGES_STORE, payload };

        expect(chatReducer(initialState, action)).toEqual({
            ...initialState,
                messages: [
                    ...initialState.messages,
                    ...action.payload,
                ],
        });
    });

    it('chatReducer should return correct state when no action type', () => {
        const action = { type: '', payload: '' };

        expect(chatReducer(initialState, action)).toEqual({ ...initialState });
    });
});
