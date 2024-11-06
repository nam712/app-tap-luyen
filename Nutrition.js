// NutritionScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NutritionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Meal Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Meal Ideas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendationCard}>
        <Image source={require('./assets/Nutrition/smoothie.png')} style={styles.cardImage} />
        <Text style={styles.recipeTag}>Recipe of the Day</Text>
        <Text style={styles.cardTitle}>Carrot and Orange Smoothie</Text>
        <View style={styles.infoContainer}>
          <Icon name="time-outline" size={16} color="#888" />
          <Text style={styles.infoText}>10 Minutes</Text>
          <Icon name="flame-outline" size={16} color="#888" style={{ marginLeft: 10 }} />
          <Text style={styles.infoText}>70 Cal</Text>
        </View>
      </View>

      {/* Add more sections for Recommended and Recipes For You */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  header: { padding: 20, backgroundColor: '#222' },
  sectionTitle: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  tabText: { color: '#fff', fontSize: 14 },
  recommendationCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    margin: 20,
  },
  cardImage: { width: '100%', height: 150, borderRadius: 10 },
  recipeTag: { backgroundColor: '#3498db', color: '#fff', padding: 5, borderRadius: 5, position: 'absolute', top: 10, right: 10 },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  infoContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  infoText: { color: '#888', fontSize: 14, marginLeft: 3 },
});

export default NutritionScreen;
