import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const OnboardingScreenA = ({ navigation }) => {
  useEffect(() => {
    // Chuyển sang màn hình B sau 3 giây
    const timer = setTimeout(() => {
      navigation.navigate('intro2');
    }, 3000); // 3000 milliseconds = 3 giây

    // Hủy bỏ bộ hẹn giờ khi màn hình bị unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
    source={require('./assets/intro/1.png')}
      style={styles.background}
    >
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>FG</Text>
          <Icon name="running" size={40} color="#00B5B8" /> {/* FontAwesome running icon */}
        </View>
        <Text style={styles.subText}>FIT GROUP7</Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00B5B8', // Greenish blue color
    fontStyle: 'italic', // Slightly italicized
  },
  subText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default OnboardingScreenA;
