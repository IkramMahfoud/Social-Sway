import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import Selection from '../screens/SelectionsScreen';

// Screen Names
const homeName = 'Home';
const selectionName = 'Selection';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === selectionName) {
            iconName = focused ? 'like' : 'like-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>

      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={selectionName} component={Selection} />

    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
