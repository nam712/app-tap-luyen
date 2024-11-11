import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import FavoriteScreen from './FavoriteScreen';
import ContactScreen from './ContactScreen';
import Workout from './Workout';
import Community from './Community'
import { FavoritesProvider } from './FavoritesContext';
import Nutrition from './Nutrition';
import MealPlans from './MealPlans';
import RecipeDetail from './RecipDetail';
import MealIdeas from './MealIdeas';
import Video from './Video';
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
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false, animationEnabled: false }} 
        />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Workout"
            component={Workout}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
            <Stack.Screen
            name="Community"
            component={Community}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
             <Stack.Screen
            name="Video"
            component={Video}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
          <Stack.Screen
            name="Nutrition" 
            component={Nutrition}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
             <Stack.Screen
            name="MealPlans" 
            component={MealPlans}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
            <Stack.Screen
            name="MealIdeas" 
            component={MealIdeas}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
          <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ title: 'Recipe', headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff' }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
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
