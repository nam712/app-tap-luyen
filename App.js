import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import FavoriteScreen from './FavoriteScreen';
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'ProgressScreen') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'FavoriteScreen') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'ContactScreen') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false, // Ẩn tên màn hình dưới icon
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
        <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Tab.Screen name="ContactScreen" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
