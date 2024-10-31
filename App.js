import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import FavoriteScreen from './FavoriteScreen';
import ContactScreen from './ContactScreen';
import Workout from './Workout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
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
        tabBarShowLabel: false, // Hide label under icons
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen 
  name="Workout" 
  component={Workout} 
  options={{ 
    headerShown: true,
    headerStyle: styles.header, // Apply header background style
    headerTitleStyle: styles.headerTitle, // Apply title text style
    headerTintColor: styles.headerTitle.color, // Color of back button and icons
  }} 
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222', // Background color of the header
  },
  headerTitle: {
    color: '#00BBD3', // Text color of the title
    fontSize: 20,  // Font size of the title
    fontWeight: 'bold', // Font weight of the title
  },
  workoutContainer: {
    flex: 1,
    backgroundColor: '#222', // Match header background color
    paddingTop: 0, // Remove padding/margin if any
  },
});
