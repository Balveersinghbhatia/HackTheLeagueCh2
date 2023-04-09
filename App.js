import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Firstscreen from './Src/Screen/First';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Src/Screen/Login';
import Home from './Src/Screen/Home';
import EncryptedStorage from 'react-native-encrypted-storage';

const Stack = createStackNavigator();

function App() {
  const [firstTime, setfirstTime] = useState('true');

  const checkFirstTime = async () => {
    let firstTimeLocal = await EncryptedStorage.getItem('firstTime');
    if (firstTimeLocal === 'false') {
      setfirstTime(firstTimeLocal);
    }
  };
  useEffect(() => {
    checkFirstTime();
  }, []);

  return (
    <>
      <NavigationContainer>
        {firstTime === 'true' ? (
          <>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="Firstscreen"
                component={Firstscreen}></Stack.Screen>

              <Stack.Screen name="Home" component={Home}></Stack.Screen>
              <Stack.Screen name="Login" component={Login}></Stack.Screen>
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login}></Stack.Screen>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
