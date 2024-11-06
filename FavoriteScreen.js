import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFavorites } from './FavoritesContext'; 
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteScreen = () => {
  const { favorites, toggleFavorite } = useFavorites(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      <ScrollView>
        <View style={styles.workoutList}>
          {favorites.length > 0 ? (
            favorites.map((workout, index) => (
              <TouchableOpacity key={index} style={styles.workoutCard} onPress={() => console.log('Workout selected:', workout)}>
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
))
          ) : (
            <Text style={styles.noFavoritesText}>You have no favorites yet.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    paddingTop:35
  },
  workoutList: { paddingHorizontal: 20 },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  inlineInfo: { flexDirection: 'row'  },
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
});

export default FavoriteScreen;
