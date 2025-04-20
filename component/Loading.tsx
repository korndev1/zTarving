import {ActivityIndicator, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { color } from '../src/Constant/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/assets/image_icon/logo.png')}
        style={{width: 100, height: 100, resizeMode: 'cover'}}
      />
      <ActivityIndicator size={"large"} color={color.primary}/>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    zIndex: 1,
  },
});
