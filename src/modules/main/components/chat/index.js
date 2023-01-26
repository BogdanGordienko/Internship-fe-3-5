import { connect } from 'react-redux';
import Component from './Chat';
import * as actions from '../../actions';
import * as selectors from '../../selectors';

const mapStateToProps = state => ({
    userId: selectors.getUserId(state),
    messages: selectors.getMessages(state),
});

const mapDispatchToProps = dispatch => ({
    sendMessage: payload => dispatch(actions.sendMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
