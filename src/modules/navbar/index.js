import { connect } from 'react-redux';
import Component from './Navbar';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    user: selectors.getUserId(state),
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(actions.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
