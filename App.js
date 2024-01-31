import * as React from 'react';
import  {NavigationContainer}  from '@react-navigation/native';

// navigation
import DrawerNavigation from './navigation/DrawerNavigation';
import BottomTabsNavigator from './navigation/BottomTabsNavigator';


export default function App() {

  return (
    <NavigationContainer>
        <DrawerNavigation />
        {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
}