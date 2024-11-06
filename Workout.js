import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';
const WorkoutScreen = () => {
  const [activeTab, setActiveTab] = useState('Beginner');
  const { favorites, toggleFavorite } = useFavorites();

  const workouts = {
    Beginner: [
      {
        name: "Functional Training",
        duration: "2 Minutes",
        calories: "1450 Kcal",
        exercises: "3 Exercises",
        image: require('./assets/home-pic/squat.png')
      },
      {
        name: "Upper Body",
        duration: "60 Minutes",
        calories: "1320 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/upperbody.png')
      },
      {
        name: "Full Body Stretching",
        duration: "45 Minutes",
        calories: "1450 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/bodystretching.png')
      },
      {
        name: "Glutes & Abs",
        duration: "12 Minutes",
        calories: "120 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/glutesabs.png')
      },
    ],
    Intermediate: [
      {
        name: "Cardio fitness",
        duration: "45 Minutes",
        calories: "120 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/cardiofitness.png')
      },
      {
        name: "Circuit Training",
        duration: "50 Minutes",
        calories: "1300 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/circuit.png')
      },
      {
        name: "Split Strength Training",
        duration: "12 Minutes",
        calories: "1250 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/splitstrength.png')
      },
      {
        name: "Resistance Training",
        duration: "12 Minutes",
        calories: "120 Kcal",
        exercises: "2 Exercises",
        image: require('./assets/home-pic/resistance.png')
      },
    ],
    Advanced: [
      {
        name: "Upper Body Strength",
        duration: "60 Minutes",
        calories: "120 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/upperbodystrength.png')
      },
      {
        name: "Cardio boxing",
        duration: "50 Minutes",
        calories: "1350 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/cardioboxing.png')
      },
      {
        name: "Hypertrophy - Legs",
        duration: "12 Minutes",
        calories: "1250 Kcal",
        exercises: "5 Exercises",
        image: require('./assets/home-pic/hypertrophy-legs.png')
      },
      {
        name: "Rest or Active Recovery",
        duration: "12 Minutes",
        calories: "120 Kcal",
        exercises: "2 Exercises",
        image: require('./assets/home-pic/recovery.png')
      },
    ]
  };



  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Beginner' && styles.activeTab]} onPress={() => setActiveTab('Beginner')}>
            <Text style={styles.tabText}>Beginner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Intermediate' && styles.activeTab]} onPress={() => setActiveTab('Intermediate')}>
            <Text style={styles.tabText}>Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Advanced' && styles.activeTab]} onPress={() => setActiveTab('Advanced')}>
            <Text style={styles.tabText}>Advanced</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trainingSection}>
        <TouchableOpacity style={styles.infoContainer}>
          <Image source={workouts[activeTab][0].image} style={styles.trainingImage} />
          <Text style={styles.trainingOverlayText}>Training of the Day</Text>
          <Text style={styles.trainingTitle}>{workouts[activeTab][0].name}</Text>
          <View style={[styles.inlineInfo, { paddingLeft: 10, paddingBottom:5 }]}>
            <Icon name="time-outline" size={16} color="#555" />
            <Text style={[styles.trainingSubtitle, { marginLeft: 3 }]}>{workouts[activeTab][0].duration}</Text>
            <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
            <Text style={[styles.trainingSubtitle, { marginLeft: 3 }]}>{workouts[activeTab][0].calories}</Text>
            <Icon name="barbell-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
            <Text style={[styles.trainingSubtitle, { marginLeft: 3 }]}>{workouts[activeTab][0].exercises}</Text>
          </View>
          <TouchableOpacity 
      style={styles.favoriteButton} 
      onPress={() => toggleFavorite(workouts[activeTab][0])}>
      <Icon name={favorites.some(fav => fav.name === workouts[activeTab][0].name) ? "heart" : "heart-outline"} 
        size={24} 
        color="red" 
      />
    </TouchableOpacity>
        </TouchableOpacity>
        
      </View>

      <Text style={styles.sectionTitle}>Let's Go {activeTab}</Text>
      <Text style={styles.titlecontent}>Explore Different Workout Styles</Text>
      <View style={styles.workoutList}>
        {workouts[activeTab].slice(1).map((workout, index) => (
          <TouchableOpacity key={index} style={styles.workoutCard}>
            <View style={styles.workoutTextContainer}>
              <Text style={styles.workoutName}>{workout.name}</Text>
              <View style={styles.inlineInfo}>
                <Icon name="time-outline" size={16} color="#555" />
                <Text style={[styles.workoutInfoText, { marginLeft: 3 }]}>{workout.duration}</Text>
                <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                <Text style={[styles.workoutInfoText, { marginLeft: 3 }]}>{workout.calories}</Text>
              </View>
              <View style={styles.exerciseInfo}>
                <Icon name="barbell-outline" size={16} color="#555" />
                <Text style={[styles.workoutInfoText, { marginLeft: 3 }]}>{workout.exercises}</Text>
              </View>
            </View>
            <Image source={workout.image} style={styles.workoutImage} />
            <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(workout)}>
              <Icon name={favorites.some(fav => fav.name === workout.name) ? "heart" : "heart-outline"} size={24} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  header: { padding: 15, backgroundColor: '#222' },
  tabContainer: { flexDirection: 'row', marginTop: 10 },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { backgroundColor: '#3498db' },
  tabText: { color: '#fff', fontSize: 14 },
  trainingSection: {
    padding: 20,
    backgroundColor: '#e8f4ff',
    marginBottom: 20,
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  trainingImage: {
    width: '100%',
    height: 165,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  trainingOverlayText: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 5,
    borderRadius: 5,
  },
  trainingTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
  inlineInfo: { flexDirection: 'row'  },
  trainingSubtitle: { color: '#888' },
  sectionTitle: { fontSize: 18, color: '#fff', paddingLeft: 20, paddingBottom: 10 },
  titlecontent: { fontSize: 14, color: '#fff', paddingLeft: 20 },
  workoutList: { paddingHorizontal: 20 },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  workoutTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  workoutName: { fontSize: 23, fontWeight: 'bold' },
  workoutInfoText: { color: '#555' ,},
  exerciseInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  workoutImage: { 
    width:"45%", 
    height: 120, 
    borderRadius: 20, 
  }, 
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 10, // Adjust this value as needed
    right: 10,  // Adjust this value as needed
    backgroundColor: 'transparent', // Ensures the button background is transparent
  },
  
});



export default WorkoutScreen;
