import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

const OnboardingScreenD = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
      source={require('./assets/intro/4.png')}

        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>A Community For You, Challenge Yourself</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text style={styles.nextButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#00a0ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreenD;
