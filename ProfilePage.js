import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Alert } from 'react-native';


const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.profileInfo}>
        <Image
          source={require('./assets/Frame17.png')} // Replace with real image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Madison Smith</Text>
        <Text style={styles.email}>madisons@example.com</Text>
        <Text style={styles.birthday}>Birthday: April 1st</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>75 Kg</Text>
          <Text style={styles.stat}>28 Years Old</Text>
          <Text style={styles.stat}>1.65 CM</Text>
        </View>
      </View>
      <ScrollView style={styles.menu}>
        <MenuItem title="Profile" onPress={() => navigation.navigate('UpdateProfile')} />
        <MenuItem title="Favorite"  />
        <MenuItem title="Privacy Policy"  />
        <MenuItem title="Settings"  />
        <MenuItem title="Help"  />
        <MenuItem
  title="Logout"
  onPress={() => 
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => navigation.navigate('Welcome') }
      ]
    )
  }
/>

      </ScrollView>
    </View>
  );
};

const MenuItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.menuText}>{title}</Text>
    <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  profileInfo: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  birthday: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  stat: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menu: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    marginVertical: 5,
  },
  menuText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProfileScreen;
