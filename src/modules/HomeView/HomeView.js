// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import {
  View,
  FlatList,
  ActivityIndicator,
  InteractionManager
} from 'react-native';

// Components
import ImageBox from '../../components/ImageBox';

// Services
import {fetchPhotos} from '../../services/unsplashAPI';

// Themes
import {color1} from '../../themes/Colors';

// Relative Path Only
import styles from './HomeViewStyles';

class HomeView extends Component {
  static displayName = 'HomeViewView';

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    images: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    actions: PropTypes.shape({
      setImagesList: PropTypes.func,
      addImagesToList: PropTypes.func
    }).isRequired
  };

  state = {
    loading: true
  };

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
        // Init actions to navigation bar
      this.props.navigation.setParams({
        addImage: this.handleAddImage
      });
    });
  }

  componentDidMount() {
    fetchPhotos()
      .then(images => {
        // Dimiss indicator
        this.setState({loading: false});
        // Update image in Store
        this.props.actions.setImagesList(images);
      });
  }

  /**
   * Component to render in list
   * @param  {Object} item object to information to render in list
   * @return {Component}    Row to render in list
   */
  getRenderRow = ({item}) => (
    <ImageBox item={item.toJS()}/>
  )

  /**
   *  Open image  library provider to user select image and add in top list
   */
  handleAddImage = () => {
    const options = {
      quality: 0.6,
      maxWidth: 614,
      maxHeight: 614,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response && response.data && response.data.length > 0) {
        this.props.actions.addImagesToList({
          image: `data:image/png;base64,${response.data}`
        });
      }
    });
  }

  /**
   *  Key asign to component render in list
   * @param  {Object} item data
   * @return  {String} key name to component
   */
  _keyExtractor = (item) => item.toJS().image;

  render() {
    // get props
    const images = this.props.images
    ? this.props.images.toArray()
    : [];

    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.centered]}>
           <ActivityIndicator
             size='large'
             color={color1}
           />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={images}
          renderItem={this.getRenderRow}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default HomeView;
