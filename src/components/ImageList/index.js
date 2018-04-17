// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList
} from 'react-native';

// Components
import ImageBox from '../ImageBox';

// Relative Path OnLy
import styles from './ImageListStyles';

class ImageList extends Component {

  static propTypes = {
    images: PropTypes.array
  };

  /**
   * Component to render in list
   * @param  {Object} item object to information to render in list
   * @return {Component}    Row to render in list
   */
  getRenderRow = ({item}) => (
    <ImageBox item={item.toJS()}/>
  )

  /**
   *  Key asign to component render in list
   * @param  {Object} item data
   * @return  {String} key name to component
   */
  _keyExtractor = (item) => item.toJS().image;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.images}
          renderItem={this.getRenderRow}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default ImageList;
