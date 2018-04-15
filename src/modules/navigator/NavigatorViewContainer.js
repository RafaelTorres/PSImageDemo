// Dependencies
import {connect} from 'react-redux';

// View
import NavigatorView from './NavigatorView';

/**
* Map state to props
*/
const mapStateToProps = state => ({
  navigatorState: state.get('navigatorState').toJS()
});

export default connect(
  mapStateToProps
)(NavigatorView);
