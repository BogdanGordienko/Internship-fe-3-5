import { connect } from 'react-redux';
import Component from './AppRouter';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    user: selectors.getUserId(state),
});

export default connect(mapStateToProps)(Component);
