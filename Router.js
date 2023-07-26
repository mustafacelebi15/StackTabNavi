import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from './Pages/WelcomeScreen';
import MemberSign from './Pages/MemberSign';
import MemberResult from './Pages/MemberResult';
import Home from './Pages/Home';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="MemberSignScreen" component={MemberSign} />
      <Stack.Screen name="MemberResultScreen" component={MemberResult} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Aslan" component={Home} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
