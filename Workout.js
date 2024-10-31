import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WorkoutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>Beginner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Advanced</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trainingSection}>
        <Image source={require('./assets/home-pic/squat.png')} style={styles.trainingImage} />
        <Text style={styles.trainingTitle}>Functional Training</Text>
        <Text style={styles.trainingSubtitle}>2 Minutes | 1450 Kcal | 3 Exercises</Text>
      </View>

      <Text style={styles.sectionTitle}>Let's Go Beginner</Text>
      <View style={styles.workoutList}>
        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.workoutTextContainer}>
            <Text style={styles.workoutName}>Upper Body</Text>
            <View style={styles.inlineInfo}>
              <Icon name="time-outline" size={16} color="#555" />
              <Text style={styles.workoutInfoText}> 60 Minutes</Text>
              <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
              <Text style={styles.workoutInfoText}> 1320 Kcal</Text>
            </View>
            <View style={styles.exerciseInfo}>
              <Icon name="barbell-outline" size={16} color="#555" />
              <Text style={styles.workoutInfoText}> 5 Exercises</Text>
            </View>
          </View>
          <Image source={require('./assets/home-pic/plank.png')} style={styles.workoutImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.workoutTextContainer}>
            <Text style={styles.workoutName}>Full Body Stretching</Text>
            <Text style={styles.workoutInfo}>45 Minutes | 1450 Kcal | 5 Exercises</Text>
          </View>
          <Image source={require('./assets/home-pic/plank.png')} style={styles.workoutImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.workoutCard}>
          <View style={styles.workoutTextContainer}>
            <Text style={styles.workoutName}>Glutes & Abs</Text>
            <Text style={styles.workoutInfo}>12 Minutes | 120 Kcal</Text>
          </View>
          <Image source={require('./assets/home-pic/plank.png')} style={styles.workoutImage} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  header: { padding: 20, backgroundColor: '#222' },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  tabContainer: { flexDirection: 'row', marginTop: 10 },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { backgroundColor: '#3498db' },
  tabText: { color: '#fff', fontSize: 14 },
  trainingSection: { padding: 20, alignItems: 'center' },
  trainingImage: { width: '100%', height: 200, borderRadius: 8 },
  trainingTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10 },
  trainingSubtitle: { color: '#888' },
  sectionTitle: { fontSize: 18, color: '#fff', padding: 20 },
  workoutList: { paddingHorizontal: 20 },

  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#e8f4ff',
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
    alignItems: 'center',
  },
  workoutTextContainer: {
    flex: 1,
    paddingRight: 20,
  },
  workoutName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  inlineInfo: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  exerciseInfo: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
  },
  workoutInfoText: { color: '#555', fontSize: 12, marginHorizontal: 5 },
  workoutImage: { 
    width: 130, 
    height: 100, 
    borderRadius: 8, 
  }, 
});

export default WorkoutScreen;
