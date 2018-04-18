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

const defaultImage = 'https://myaco.lemans.org/GED/content/4805C9CE-ECF4-4232-AEF4-3580948695DC.jpg';

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

    const source = this.props.item.image
    ? this.props.item.image
    : defaultImage;

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: source}}
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
