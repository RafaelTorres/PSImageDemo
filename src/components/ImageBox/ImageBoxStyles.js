// Dependencies
import {
  StyleSheet,
  Dimensions
} from 'react-native';

// Themes
import {
  color1,
  color3
} from '../../themes/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: color3,
    flexDirection: 'row',
    shadowColor: color1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    shadowRadius: 1,
    shadowOpacity: .5,
    elevation: 2,
    marginHorizontal: 8,
    marginBottom: 8,
    marginTop: 8
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  image: {
    width: Dimensions.get('window').width - 16,
    height: 300
  }
});
