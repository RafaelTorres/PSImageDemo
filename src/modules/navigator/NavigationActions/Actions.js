export default (params) => {

  const options = {
    addImage: {
      iconName: 'ios-images',
      title: 'Add Image',
      onPress: () => params.addImage()
    }
  };

  return options;
};
