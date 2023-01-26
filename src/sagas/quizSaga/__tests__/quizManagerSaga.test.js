import { call, put, select } from 'redux-saga/effects';
import * as sagas from '../quizManagerUserSaga';
import * as selectors from '../selectors';
import * as actions from '../actions';
import { deleteFromCollectionByDocIdRequest } from '../../../firebase/quizMethods';
import firebaseCollectionTypes from '../../../firebase/constants';

describe('setIsShowResults', () => {
    const action = {
        payload: true,
    };
    const correctAnswersCountDocId = 'xzxzx';
    const generator = sagas.setIsShowResults(action);

    it('should select getCorrectAnswersCountDocId', () => {
        expect(generator.next().value)
            .toEqual(
                select(selectors.getCorrectAnswersCountDocId)
            );
    });

    it('should put removeItemFromLocalStorage', () => {
        expect(generator.next(correctAnswersCountDocId).value)
            .toEqual(
                put(actions.removeItemFromLocalStorage('correctAnswersCountDocId'))
            );
    });

    it('should call deleteFromCollectionByDocIdRequest', () => {
        expect(generator.next().value)
            .toEqual(
                call(deleteFromCollectionByDocIdRequest, {
                    type: firebaseCollectionTypes.USERS_RESULTS,
                    docId: correctAnswersCountDocId,
                })
            );
    });

    it('should put clearUserResultsStore', () => {
        expect(generator.next().value)
            .toEqual(
                put(actions.clearUsersResultsStore())
            );
    });

    it('should put setCorrectAnswerDocIdStore', () => {
        expect(generator.next().value)
            .toEqual(
                put(actions.setCorrectAnswerDocIdStore(''))
            );
    });

    it('should put clearCorrectAnswerCountStore', () => {
        expect(generator.next().value)
            .toEqual(
                put(actions.clearCorrectAnswerCountStore())
            );
    });

    it('should put clearAnswersListStore', () => {
        expect(generator.next().value)
            .toEqual(
                put(actions.clearAnswersListStore())
            );
    });

    it('should put setIsShowResultsStore', () => {
        expect(generator.next().value)
            .toEqual(
                put(actions.setIsShowResultsStore(action.payload))
            );
    });

    it('should finish', () => {
        expect(generator.next().done).toBe(true);
    });
});
