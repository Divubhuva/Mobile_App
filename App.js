import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import MenuScreen from './Components/MenuScreen ';

var deviceWidth = Dimensions.get('screen').width;
var deviceHeight = Dimensions.get('screen').height;

const App = () => {
  return (
    <View style={styles.MainPageStyle}>
      <MenuScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  MainPageStyle: {
    flex: 1,
    marginTop: deviceHeight * 0.05,
    marginBottom: deviceHeight * 0.02,
    marginLeft: deviceWidth * 0.02,
    marginRight: deviceWidth * 0.02,
  },
});

export default App;
