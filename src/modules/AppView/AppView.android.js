// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import {
  View,
  StatusBar,
  BackHandler,
  ActivityIndicator
} from 'react-native';

// Redux
import store from '../../redux/store';

// Modules
import NavigatorViewContainer from '../navigator/NavigatorViewContainer';

// Components
import DeveloperMenu from '../../components/DeveloperMenu';

// Utils
import * as snapshotUtil from '../../utils/snapshot';
import {color1} from '../../themes/Colors';

// Relative Path Only
// import * as SessionStateActions from '../../modules/session/SessionState';
import styles from './AppViewStyles';

// Default Props
const statusBarProps = {
  backgroundColor: color1,
  barStyle: 'light-content'
};

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    // dispatch: PropTypes.func.isRequired,
    actions: PropTypes.shape({
      resetSessionStateFromSnapshot: PropTypes.func,
      initializeSessionState: PropTypes.func
    }).isRequired
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.navigateBack);
  }

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {actions} = this.props;

        if (snapshot) {
          actions.resetSessionStateFromSnapshot(snapshot);
        } else {
          actions.initializeSessionState();
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });
  }

  navigateBack() {
    const navigatorState = store.getState().get('navigatorState');

    const currentStackScreen = navigatorState.get('index');
    const currentTab = navigatorState.getIn(['routes', 0, 'index']);

    if (currentTab !== 0 || currentStackScreen !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    }

    // otherwise let OS handle the back button action
    return false;
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={styles.container}>
          <StatusBar {...statusBarProps}/>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar {...statusBarProps}/>
        <NavigatorViewContainer />
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

export default AppView;
