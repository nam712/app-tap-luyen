import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';
import { mealideaData } from './DataSets';

const MealIdeaScreen = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Breakfast' && styles.activeTab]} onPress={() => setActiveTab('Breakfast')}>
            <Text style={styles.tabText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Lunch' && styles.activeTab]} onPress={() => setActiveTab('Lunch')}>
            <Text style={styles.tabText}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, activeTab === 'Dinner' && styles.activeTab]} onPress={() => setActiveTab('Dinner')}>
            <Text style={styles.tabText}>Dinner</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.popularSection}>
        <TouchableOpacity style={styles.infoContainer}>
          <Image source={mealideaData[activeTab][0].image} style={styles.popularImage} />
          <Text style={styles.popularOverlayText}>Recipe of the day</Text>
          <Text style={styles.popularTitle}>{mealideaData[activeTab][0].name}</Text>
          <View style={[styles.inlineInfo, { paddingLeft: 10, paddingBottom:5 }]}>
            <Icon name="time-outline" size={16} color="#555" />
            <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{mealideaData[activeTab][0].duration}</Text>
            <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
            <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{mealideaData[activeTab][0].calories}</Text>
          </View>
          <TouchableOpacity style={styles.favoritePopular} onPress={() => toggleFavorite(mealideaData[activeTab][0])}>
            <Icon name={favorites.some(fav => fav.name === mealideaData[activeTab][0].name) ? "heart" : "heart-outline"} size={30} color="red" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recommended </Text>
        <View style={styles.contentContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {mealideaData[activeTab].slice(1,3).map((item,index)=>(
              <TouchableOpacity key={index} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                    <View style={styles.inlineInfo}>
                      <Icon name="time-outline" size={16} color="#555" />
                      <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> {item.duration}</Text>
                      <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                      <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}>{item.calories}</Text>
                    </View> 
                  </View> 
                  <TouchableOpacity style={styles.favoritecard} onPress={() => toggleFavorite(item)}>
                    <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
                  </TouchableOpacity>
              </TouchableOpacity>
              ))}
            </ScrollView>
        </View>

        <Text style={[styles.sectionTitle, {paddingTop:10}]}> Recipes for you </Text>
        <View style={styles.itemList}>
          {mealideaData[activeTab].slice(3).map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemCard}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.duration}</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.calories}</Text>
                </View>
              </View>
              <Image source={item.image} style={styles.itemImage} />
              <TouchableOpacity style={styles.favoriteItem} onPress={() => toggleFavorite(item)}>
                <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  inlineInfo: { flexDirection: 'row', alignItems: 'center',marginBottom: 5,},

  container: { flex: 1, backgroundColor: '#111' },
  header: { padding: 15, backgroundColor: '#222' },
  tabContainer: { flexDirection: 'row', marginTop: 10 },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center',borderRadius:17 },
  activeTab: { backgroundColor: '#3498db' },
  tabText: { color: '#fff', fontSize: 14 },

  popularSection: { padding: 20, backgroundColor: '#e8f4ff', marginBottom: 20, alignItems: 'center', },
  infoContainer: { backgroundColor: '#000', borderRadius: 20, width: '100%', justifyContent: 'space-around', },
  popularImage: { width: '100%', height: 165, borderTopLeftRadius: 20, borderTopRightRadius: 20, },
  popularOverlayText: { position: 'absolute', top: 10, right: 10, color: '#fff', fontSize: 16,
                        fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)',  padding: 5, borderRadius: 5,},
  popularTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
  popularSubtitle: { color: '#888' },
  favoritePopular: { position: 'absolute', bottom: 10,  right: 10,  backgroundColor: 'transparent',  },

  sectionTitle: { fontSize: 20, color: '#fff', paddingLeft: 30, paddingBottom: 10 },
  contentContainer: { justifyContent: 'center', alignItems: 'center' },
  card: { marginRight: 10, width: 165, backgroundColor: '#333', borderRadius: 13, overflow: 'hidden' },
  cardImage: { width: '100%', height: 100 },
  cardContent: { borderLeftWidth: 1,  borderRightWidth: 1,  borderBottomWidth: 1,  borderColor: '#fff', borderBottomLeftRadius: 13, borderBottomRightRadius: 13},
  cardTitle: { color: '#fff', fontSize: 14, fontWeight: 'bold', margin: 5 },
  cardSubtitle: { color: '#888', fontSize: 12, margin: 5 },
  favoritecard: { position:"absolute", right: 10, top:10 },

  itemList: { paddingHorizontal: 20 },
  itemCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, marginVertical: 10, alignItems: 'center', },
  itemTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  itemName: { fontSize: 23, fontWeight: 'bold' },
  itemInfoText: { color: '#555' ,},
  itemImage: { width:"45%", height: 120, borderRadius: 20, }, 
  favoriteItem: {position: 'absolute', top: 10, right: 10,},
});

export default MealIdeaScreen;
