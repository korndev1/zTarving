import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from './Constant/colors';
import StackRoute from './routes/StackRoute';
import { fontSize } from './Constant/fontSize';

export default function MainApp() {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
        setSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <>
      {splashScreen ? (
        <View style={styles.container}>
          <Text style={styles.text}>zTarving</Text>
          <ActivityIndicator
            size={'large'}
            color={color.white}
            style={{position: 'absolute', bottom: 100}}
          />
        </View>
      ) : (
        <StackRoute />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: fontSize.font_40,
    color: color.white
  }
});
