import Component from './Results';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import * as selectors from '../../../../selectors';

const mapStateToProps = state => ({
    usersResultsList: selectors.getUsersResultsList(state),
});

const mapDispatchToProps = dispatch => ({
    setIsShowResults: payload => dispatch(actions.setIsShowResults(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
