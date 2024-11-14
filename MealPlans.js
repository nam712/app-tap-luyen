// MealPlansScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from './FavoritesContext';
import { mealplanData } from './DataSets';

const MealPlansScreen = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const navigation = useNavigation();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Breakfast Plan For You</Text>
      <Text style={styles.subheader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <View>
        {mealplanData.map((item) => (
          <View key={item.name} style={styles.itemWrapper}>
            <TouchableOpacity onPress={() => setSelectedMeal(item.name)}>
              <Icon name={selectedMeal === item.name ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={selectedMeal === item.name ? '#1E90FF' : '#888'} style={styles.selectionIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemCard} onPress={() => setSelectedMeal(item.name)} >
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.duration}</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}> {item.calories} </Text>
                </View>
              </View>
              <Image source={item.image} style={styles.itemImage} />
              <TouchableOpacity style={styles.favoriteItem} onPress={() => toggleFavorite(item)}>
                <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>       
        ))}
      </View>
      <TouchableOpacity style={styles.recipeButton} onPress={() => { const selected = mealplanData.find((item) => item.name === selectedMeal); 
        if (selected) { navigation.navigate('RecipeDetail', { item: selected }); } }} disabled={!selectedMeal}>
        <Text style={styles.recipeButtonText}>See Recipe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  inlineInfo: { flexDirection: 'row'  },

  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  header: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 5 },
  subheader: { color: '#888', fontSize: 14, marginBottom: 20 },
  
  itemWrapper: { flexDirection: 'row', alignItems: 'center', marginVertical: 10, },
  selectionIcon: { marginRight: 5 },
  itemCard: { flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, alignItems: 'center', },
  itemTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  itemName: { fontSize: 21, fontWeight: 'bold' },
  itemInfoText: { color: '#555' ,},
  itemImage: { width:"45%", height: 120, borderRadius: 20, }, 
  favoriteItem: { position: 'absolute', top: 10, right: 10, },
  recipeButton: { backgroundColor: '#1E90FF', borderRadius: 10, padding: 15, alignItems: 'center', marginTop: 20, },
  recipeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

});

export default MealPlansScreen;
