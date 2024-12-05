import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Thư viện icon

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
            <MaterialIcons
              name="notifications"
              size={24}
              color="#f5dd4b"
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
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

  listContent: {
    paddingBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#2C2C2C', // Nền xám tối
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // Bóng cho Android
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Màu chữ trắng
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#ccc', // Màu xám nhạt
  },
});

export default NotificationsScreen;