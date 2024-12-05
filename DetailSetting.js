import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  // Lấy trạng thái thông báo từ AsyncStorage khi ứng dụng khởi động
  useEffect(() => {
    const getNotificationStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem('notificationStatus');
        if (storedStatus !== null) {
          setIsEnabled(storedStatus === 'true');
        }
      } catch (error) {
        console.log('Error retrieving notification status:', error);
      }
    };
    getNotificationStatus();
  }, []);

  // Lưu trạng thái thông báo vào AsyncStorage
  const saveNotificationStatus = async (status) => {
    try {
      await AsyncStorage.setItem('notificationStatus', status.toString());
    } catch (error) {
      console.log('Error saving notification status:', error);
    }
  };

  // Xử lý khi bật/tắt thông báo
  const toggleSwitch = () => {
    const newStatus = !isEnabled;
    setIsEnabled(newStatus);
    saveNotificationStatus(newStatus);
    Alert.alert(
      'Notification',
      newStatus ? 'Notifications enabled' : 'Notifications disabled'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Notifications 
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Đặt các thành phần cùng hàng
    justifyContent: 'space-between', // Căn đều hai bên
    alignItems: 'center', // Căn giữa theo trục dọc
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16, // Thêm khoảng cách ngang
    paddingVertical: 10, // Thêm khoảng cách dọc
    backgroundColor:"#555",
  },
  text: {
    fontSize: 18,
    marginRight: 10, // Tạo khoảng cách giữa Text và Switch
    color:'white'
  },
});

export default NotificationToggle;
