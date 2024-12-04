import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FG</Text>
      <Text style={styles.title}>FIT GROUP7</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Đăng ký</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clientButton} onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={styles.loginButtonText}>Khách</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
  },
  logo: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#007AFF',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 40, // Reduced padding to fit better with text constraints
    borderRadius: 8,
    marginBottom: 20,
    maxWidth: 300, // Set a maximum width to limit the button size
    width: '100%', // Makes the button take up full width of parent container, respecting maxWidth
    justifyContent: 'center', // Ensures content is centered
    alignItems: 'center', // Ensures content is centered horizontally
  
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    maxWidth: 300, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  loginButtonText: {
    color: '#000000', // Màu chữ đen cho nút Đăng nhập
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButtonText: {
    color: '#FFFFFF', // Màu chữ trắng cho nút Đăng ký
    fontSize: 18,
    fontWeight: 'bold',
  },
  clientButton: {    
    backgroundColor: '#33E4DB', // Màu chữ trắng cho nút Đăng ký
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
    maxWidth: 300, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default WelcomeScreen;