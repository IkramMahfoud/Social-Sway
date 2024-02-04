// DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      }}>
      <Drawer.Screen name="Accueil" component={BottomTabsNavigator} />
      <Drawer.Screen name="FAQ" component={FAQ} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigation;
