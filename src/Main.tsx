import { View } from 'react-native';
import React from 'react';
import * as Styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { RootStackParamList } from './interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  const styles = Styles.MainStyles();

  return (
    <>
      <View style={styles.AppContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'ios',
            }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

export default Main;
