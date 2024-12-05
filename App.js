
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import intro1 from'./intro1';
import intro2 from'./intro2';
import intro3 from'./intro3';
import intro4 from'./intro4';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import SetUpScreen from './SetUpScreen';
import GenderScreen from './GenderScreen';
import WeightScreen from './WeightScreen';
import HeightScreen from './HeightScreen';
import ProfileScreen from './ProfileScreen';

import ProfilePage from './ProfilePage';
import DetailSetting from './DetailSetting';
import NotificationsScreen from './NotificationsScreen';
import SearchScreen from './SearchScreen';
import UpdateProfile from './UpdateProfile'
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
import RecipeVideo from './meal/RecipeVideo';
import ProgressTracking from './ProgressTracking';


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
  const [profileData, setProfileData] = useState({
    fullName: '',
    nickname: '',
    email: '',
    mobileNumber: '',
  });
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
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* Màn hình đăng nhập và đăng ký */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
             title: 'Log In', 
             headerBackTitleVisible: false,
             headerStyle: styles.header,
             headerTitleStyle: styles.headerTitle,
             headerTintColor: styles.headerTitle.color,
             }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignUpScreen} 
          options={{
             title: 'Create Account',
              headerBackTitleVisible: false,
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }} 
        />
                {/* Màn hình thiết lập thông tin */}
                <Stack.Screen 
          name="SetUp" 
          component={SetUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Gender" 
          component={GenderScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Weight" 
          component={WeightScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Height" 
          component={HeightScreen} 
          options={{ headerShown: false }} 
        />
                {/* Màn hình nhập thông tin cá nhân */}
          <Stack.Screen 
          name="ProfileScreen" 
          options={{ 
            title: 'Fill Profile', 
            headerShown: true,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: styles.headerTitle.color,
          }}
        >
          {(props) => (
            <ProfileScreen 
              {...props} 
              setProfileData={setProfileData} 
              profileData={profileData} 
            />
          )}
        </Stack.Screen>

        {/* Màn hình hiển thị thông tin cá nhân */}
        <Stack.Screen 
  name="ProfilePage" 
  options={{ 
    title: 'My Profile', 
    headerShown: true,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: styles.headerTitle.color,
  }}
>
  {(props) => (
    <ProfilePage 
      {...props} 
      profileData={profileData} 
    />
  )}
</Stack.Screen>

        {/* Màn hình thông báo */}
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ title: 'Notifications',
            headerShown: true,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: styles.headerTitle.color,
           }} 
        />

        {/* Màn hình tìm kiếm */}
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ 
            title: 'Search' ,
            headerShown: true,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: styles.headerTitle.color,
          }} 
        />
              <Stack.Screen 
          name="UpdateProfile" 
          component={UpdateProfile} 
          options={{ 
            title: 'Update Profile' ,
            headerShown: true,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerTintColor: styles.headerTitle.color,
          }} 
        />
          <Stack.Screen
            name="DetailSetting"
            component={DetailSetting}
            options={{
              headerShown: true,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: styles.headerTitle.color,
            }}
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
                      <Stack.Screen
            name="ProgressTracking"
            component={ProgressTracking}
            options={{
              title: 'Progress Tracking',
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
