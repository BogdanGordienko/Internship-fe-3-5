import { connect } from 'react-redux';
import Component from './Login';
import * as actions from './actions';

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(actions.signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Component);
