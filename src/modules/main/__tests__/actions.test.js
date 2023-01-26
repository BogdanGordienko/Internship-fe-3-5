import * as actions from '../actions';
import actionTypes from '../../../constants/actionTypes';

describe('sendMessage', () => {
    it('sendMessage, work correct', () => {
        const expected = { type: actionTypes.SEND_MESSAGE };

        expect(actions.sendMessage(expected.payload)).toEqual(expected);
    });
});

describe('setIsShowResults', () => {
    it('setIsShowResults, work correct', () => {
        const expected = { type: actionTypes.SET_IS_SHOW_RESULTS };

        expect(actions.setIsShowResults(expected.payload)).toEqual(expected);
    });
});

describe('setIsReadyForGame', () => {
    it('setIsReadyForGame, work correct', () => {
        const expected = { type: actionTypes.SET_IS_READY_FOR_GAME };

        expect(actions.setIsReadyForGame(expected.payload)).toEqual(expected);
    });
});

describe('setAnswersListStore', () => {
    it('setAnswersListStore, work correct', () => {
        const expected = { type: actionTypes.SET_ANSWERS_LIST_STORE };

        expect(actions.setAnswersListStore(expected.payload)).toEqual(expected);
    });
});

describe('setCorrectAnswersCountStore', () => {
    it('setCorrectAnswersCountStore, work correct', () => {
        const expected = { type: actionTypes.SET_CORRECT_ANSWERS_COUNT_STORE };

        expect(actions.setCorrectAnswersCountStore(expected.payload)).toEqual(expected);
    });
});
