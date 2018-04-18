// Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import {
  View,
  ActivityIndicator,
  InteractionManager
} from 'react-native';

// Components
import ImageList from '../../components/ImageList';

// Services
import {fetchPhotos} from '../../services/unsplashAPI';

// Themes
import {color1} from '../../themes/Colors';

// Relative Path Only
import styles from './HomeViewStyles';

class HomeView extends Component {
  static displayName = 'HomeView';

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    images: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    actions: PropTypes.shape({
      setImagesList: PropTypes.func,
      addImagesToList: PropTypes.func,
      addMoreImagesToList: PropTypes.func
    }).isRequired
  };

  state = {
    loading: true,
    refreshing: false,
    page: 1
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
    this.fechImages();
  }

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
   *  Refresh Photo list call api
   */
  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true
    }, () => {
      this.fechImages();
    });

  }

  /**
   *  Load more image in list
   */
  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.fechImages();
    });
  }

  /**
   *  Execute request to load images from unsplashAPI
   */
  fechImages = () => {
    fetchPhotos(this.state.page)
      .then(images => {

        const {page} = this.state;
        // Dimiss indicator
        this.setState({
          loading: false,
          refreshing: false
        });

        if (page === 1) {
          // Update image in Store
          this.props.actions.setImagesList(images);
        } else {
          // Update image in Store
          this.props.actions.addMoreImagesToList(images);
        }
      });
  }

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
      <ImageList
        images={images}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        onEndReached={this.handleLoadMore}
      />
    );
  }
}

export default HomeView;
