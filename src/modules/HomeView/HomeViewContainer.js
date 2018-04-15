// Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// View
import HomeView from './HomeView';

// Redux Actions
import * as ActionCreators from './HomeViewActions';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  images: state.getIn(['homeState', 'images'])
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
)(HomeView);
