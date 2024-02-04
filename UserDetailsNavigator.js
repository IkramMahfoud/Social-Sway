// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import UserDetailsScreen from './src/screens/UserDetails';
import ArcticleDetails from './src/screens/ArcticleDetails';

const Stack = createStackNavigator();

const UserDetailsNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="Home"  >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ArcticleDetails" component={ArcticleDetails} />
    </Stack.Navigator>
  );
};

export default UserDetailsNavigator;