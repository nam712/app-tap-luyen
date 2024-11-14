import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';

const RecipeScreen = ({ route }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inlineInfo}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>⏱ {item.duration}</Text>
        <Text style={styles.infoText}>🔥 {item.calories}</Text>
      </View>
      <Image source={item.image} style={styles.Image} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.sectionContent}>{item.ingredients}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preparation</Text>
        <Text style={styles.sectionContent}>{item.preparation}
        </Text>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Recipes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({


  container: { flex: 1, backgroundColor: '#111', padding: 20 },
  inlineInfo: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 10 },
  infoContainer: { flexDirection: 'row', marginBottom: 20 },
  infoText: { color: '#4BA3C3', fontSize: 14, marginRight: 15 },
  Image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },

  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginBottom: 5 },
  sectionContent: { color: '#ccc', fontSize: 14, lineHeight: 20 },
  saveButton: { backgroundColor: '#1E90FF', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default RecipeScreen;
