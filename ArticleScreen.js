import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ArticlesData } from './DataSets';
import { useFavorites } from './FavoritesContext';


const ArticleScreen = () => {
  const navigation = useNavigation();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <ScrollView style={styles.container}>
        <View>
          <Text style={styles.sectionTitle}>Articles & Tips</Text>
          <View style={styles.itemList}>
            {ArticlesData.slice(0).map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemCard} onPress={() => navigation.navigate('ArticleDetail', { item })}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}  numberOfLines={3} ellipsizeMode="tail">{item.content} </Text>                  
                </View>
                <Image source={item.image} style={styles.itemImage} />
                <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(item)}>
                  <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  sectionTitle: { fontSize: 25, color: '#fff', paddingLeft: 20, paddingBottom: 10, paddingTop:35 },
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
  itemInfoText: { color: '#555' ,overflow: 'hidden'},
  itemImage: { 
    width:"45%", 
    height: 135, 
    borderRadius: 20, 
  }, 
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ArticleScreen;
