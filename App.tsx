/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screen/LoginScreen';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeSharedPreferencesKey, ScreenName} from '<utils>/constants.ts';
import NativeSharedPreferences from '<utils>/specs/NativeSharedPreferences.ts';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const isLogin = NativeSharedPreferences.getItem(
    NativeSharedPreferencesKey.IS_LOGGED_IN,
  );

  const initialRoute = isLogin ? ScreenName.LOGIN : ScreenName.LOGIN;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRoute}>
      <Stack.Screen name={ScreenName.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
