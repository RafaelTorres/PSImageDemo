// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import HeaderButtons from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

// Components

// Modules

// Utils

// Relative Path
import styles from './NavigationActionStyles';

function NavigationAction({actions, IconComponent}) {

  return (
    <HeaderButtons
      IconComponent={IconComponent}
      iconSize={23}
    >
      <HeaderButtons.Item
        buttonStyle={styles.icon}
        {...actions}
      />
    </HeaderButtons>
  );
}

NavigationAction.defaultProps = {
  IconComponent: Icon
};

NavigationAction.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  IconComponent: PropTypes.any
};

export default NavigationAction;
