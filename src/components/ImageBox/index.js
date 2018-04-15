// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ActivityIndicator
} from 'react-native';

// Themes
import {color1} from '../../themes/Colors';

// Relative Path Only
import styles from './ImageBoxStyles';

class ImageBox extends Component {

  state = {loading: false}

  /**
   * Change state to loading in component
   * @param  {bool} loading incate if component loading image
   */
  setLoadState = (loading) => {
    this.setState({loading});
  }

  render() {

    const LoadingComponent = (this.state.loading)
     ? (<View style={[styles.centered]}>
          <ActivityIndicator size='large' color={color1}/>
       </View>)
      : null;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.item.image}}
          onLoadStart={() => this.setLoadState(true)}
          onLoadEnd= {() => this.setLoadState(false)}/>
          {LoadingComponent}
      </View>
    );
  }
}

ImageBox.propTypes = {
  item: PropTypes.object.isRequired
};

export default ImageBox;
