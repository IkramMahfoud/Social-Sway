// DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import FAQ  from '../screens/FAQScreen';
import BottomTabsNavigator from './BottomTabsNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightcoral',
        },
        headerTintColor: 'white',
        headerTitleStyle:{
          fontSize: 20,
        },
        headerRight: () => (
          <Ionicons
            name="ios-settings"
            size={24}
            color="white"
            style={{ marginRight: 16 }}
          />
        ),
      }}>
      <Drawer.Screen name="Accueil" component={BottomTabsNavigator} />
      <Drawer.Screen name="FAQ" component={FAQ} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigation;
