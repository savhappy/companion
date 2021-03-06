/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';

import Home from './screens/home';
import Login from './screens/login';
import Register from './screens/register';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/profile';
import Main from './screens/Main';
import { EmergencyContext, UserContext } from './services/context';

const RootStack = createStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [ec, setEc] = useState([]);

  const valueUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const valueEc = useMemo(() => ({ ec, setEc }), [ec, setEc]);

  return (
    <UserContext.Provider value={valueUser}>
      <EmergencyContext.Provider value={valueEc}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </EmergencyContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
