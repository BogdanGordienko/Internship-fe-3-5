import Component from './Game';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import * as selectors from '../../../../selectors';

const mapStateToProps = state => ({
    text: selectors.textSelector(state),
    answers: selectors.answersSelector(state),
    correctAnswer: selectors.correctAnswerSelector(state),
    answerResultList: selectors.getAnswerResultList(state),
});

const mapDispatchToProps = dispatch => ({
    setAnswersListStore: payload => dispatch(actions.setAnswersListStore(payload)),
    setCorrectAnswersCountStore: () => dispatch(actions.setCorrectAnswersCountStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
