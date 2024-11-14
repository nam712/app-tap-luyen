import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';

const ArticleDetailScreen = ({ route }) => {
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
        <Text style={styles.infoText}>⏱ {item.time}</Text>
      </View >
      <Image source={item.image} style={styles.Image} />
        <View style={styles.section}>
        <Text style={styles.sectionContent}>{item.content}</Text>
        </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plan Your Routine:</Text>
        <Text style={styles.sectionContent}>{item.content1}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Warm-Up:</Text>
        <Text style={styles.sectionContent}>{item.content2}
        </Text>
      </View>
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

});

export default ArticleDetailScreen;
