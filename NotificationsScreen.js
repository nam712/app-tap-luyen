import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  const notifications = [
    { id: '1', message: 'New Workout is Available', date: 'June 10 - 11:00 AM' },
    { id: '2', message: 'Don’t Forget to Drink Water', date: 'June 10 - 8:00 AM' },
    { id: '3', message: 'Upper Body Workout Completed', date: 'June 9 - 6:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E1E', // Nền tối (xám đen)
  },
  notificationItem: {
    marginBottom: 15,
    backgroundColor: '#2C2C2C', // Nền xám tối
    padding: 10,
    borderRadius: 5,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Màu chữ trắng
  },
  date: {
    fontSize: 14,
    color: '#ccc', // Màu xám nhạt
    marginTop: 5,
  },
});

export default NotificationsScreen;
