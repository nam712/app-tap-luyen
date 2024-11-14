import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import intro1 from'./intro1';
import intro2 from'./intro2';
import intro3 from'./intro3';
import intro4 from'./intro4';
import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';
import FavoriteScreen from './FavoriteScreen';
import ContactScreen from './ContactScreen';
import Workout from './Workout';
import Community from './Community'
import { FavoritesProvider } from './FavoritesContext';
import Nutrition from './Nutrition';
import MealPlans from './MealPlans';
import RecipeDetail from './RecipeDetail';
import MealIdeas from './MealIdeas';
import Video from './Video';
import ArticleDetail from './ArticleDetail';
import RecipeVideo from './RecipeVideo';


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
          } else if (route.name === 'ArticleScreen') {
            iconName = focused ? 'document-text' : 'document-text-outline';
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
      <Tab.Screen name="ArticleScreen" component={ArticleScreen} />
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
          name="intro1" 
          component={intro1} 
          options={{ headerShown: false, animationEnabled: false }} 
        />
        <Stack.Screen 
          name="intro2" 
          component={intro2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="intro3" 
          component={intro3} 
          options={{ headerShown: false  }} 
        />
        <Stack.Screen 
          name="intro4" 
          component={intro4} 
          options={{ headerShown: false}} 
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
      
          <Stack.Screen
            name="RecipeDetail" 
            component={RecipeDetail}
            options={{
              title:'Recipe',
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
          <Stack.Screen
            name="RecipeVideo"
            component={RecipeVideo}
            options={{
              title:'Recipe',
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />

          <Stack.Screen
            name="ArticleDetail" 
            component={ArticleDetail}
            options={{
              title:'Article',
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#222', 
  },
  headerTitle: {
    color: '#00BBD3', 
    fontSize: 20,  
    fontWeight: 'bold',
  },
  workoutContainer: {
    flex: 1,
    backgroundColor: '#222', 
    paddingTop: 0, 
  },
});
