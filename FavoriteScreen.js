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
      <View style={styles.itemList}>
          {favorites.length > 0 ? (
            favorites.map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemCard} onPress={() => console.log('item selected:', item)}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.inlineInfo}>
                    {item.duration && (
                      <>
                        <Icon name="time-outline" size={16} color="#555" />
                        <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.duration}</Text>
                      </>
                    )}
                    {item.calories && (
                      <>
                        <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                        <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.calories}</Text>
                      </>
                    )}
                  </View>
                  {item.exercises && (
                    <View style={styles.exerciseInfo}>
                      <Icon name="barbell-outline" size={16} color="#555" />
                      <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.exercises}</Text>
                    </View>
                  )}
                </View>
                {item.image && (
                  <Image source={item.image} style={styles.itemImage} />
                )}
                <TouchableOpacity style={styles.favoriteItem} onPress={() => toggleFavorite(item)}>
                  <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
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
    paddingTop:35,
    paddingLeft:20
  },
  itemList: { paddingHorizontal: 20 },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  itemTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  itemName: { fontSize: 23, fontWeight: 'bold' },
  inlineInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  itemInfoText: { color: '#555' ,},
  exerciseInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  itemImage: { 
    width:"45%", 
    height: 120, 
    borderRadius: 20, 
  }, 
  favoriteItem: {
    position: 'absolute',
    top: 10,
    right: 10,
    
  },
  noFavoritesText:{
    fontSize: 20,
    color: '#fff',
    textAlign:'center',
    paddingTop:"100%"},
});

export default FavoriteScreen;
