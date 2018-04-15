// Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// View
import View from './AppView';

// Redux Actions
import * as ActionCreators from './AppViewActions';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  isReady: state.getIn(['AppState', 'isReady'])
});

/**
* Map dispatch to props
* @param dispatch
* @returns {object}
*/
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
