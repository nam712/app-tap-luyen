import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const dot1Opacity = useRef(new Animated.Value(0)).current;
  const dot2Opacity = useRef(new Animated.Value(0)).current;
  const dot3Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDots = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot1Opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(dot2Opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(dot3Opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(dot1Opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
          Animated.timing(dot2Opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
          Animated.timing(dot3Opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
        ])
      ).start();
    };

    animateDots();

    const timeout = setTimeout(() => {
      navigation.navigate('TabNavigator');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('./assets/home-pic/splitstrength.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>FG</Text>
          <Text style={[styles.logoText, styles.logoTextHighlight]}>7</Text>
        </View>
        <Text style={styles.subTitle}>FIT GROUP7</Text>

        {/* Three animated dots */}
        <View style={styles.dotsContainer}>
          <Animated.View style={[styles.dot, { opacity: dot1Opacity, backgroundColor: '#f0f0f0' }]} />
          <Animated.View style={[styles.dot, { opacity: dot2Opacity, backgroundColor: '#f0f0f0' }]} />
          <Animated.View style={[styles.dot, { opacity: dot3Opacity, backgroundColor: '#3498db' }]} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoTextHighlight: {
    color: '#3498db',
  },
  subTitle: {
    fontSize: 18,
    color: '#3498db',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default SplashScreen;
