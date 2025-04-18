import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../page/auth/Login'
import { LOGIN_PAGE } from './constant'

const Stack = createNativeStackNavigator()

export default function StackRoute() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={LOGIN_PAGE} component={Login}/>
        </Stack.Navigator>
       </NavigationContainer>
  )
}