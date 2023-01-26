import * as selectors from '../selectors';

describe('isQuizInProcess reselect selector', () => {
    describe('isQuizInProcess', () => {
        const mockStore = {
            ...store,
            quizState: {
                ...store.quizState,
                questionsList: [],
                isShowResults: true,
            }
        }
        it('isQuizInProcess work correct', () => {
            expect(selectors.isQuizInProcess(mockStore)).toEqual(true);
        });
    });
});
