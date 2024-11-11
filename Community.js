import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { communityData } from './DataSets';
import { useFavorites } from './FavoritesContext';
import { forums } from './DataSets';

const CommunityScreen = () => {
  const navigation = useNavigation();
  const { favorites, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState('Discussion');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Discussion' && styles.activeTab]}onPress={() => setActiveTab('Discussion')}>
          <Text style={styles.tabText}>Discussion Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Challenges' && styles.activeTab]}onPress={() => setActiveTab('Challenges')}>
          <Text style={styles.tabText}>Challenges</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Discussion' ? (
        <View >
          <View style={styles.popularSection}>
          <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Video', { item: communityData[0]})}>
            <Image source={communityData[0].image} style={styles.popularImage} />
            <Text style={styles.popularTitle}>{communityData[0].name}</Text>
            <View style={[styles.inlineInfo, { paddingLeft: 10, paddingBottom:5 }]}>
              <Icon name="time-outline" size={16} color="#555" />
              <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{communityData[0].duration}</Text>
              <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
              <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{communityData[0].calories}</Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(communityData[0])}>
              <Icon name={favorites.some(fav => fav.name === communityData[0].name) ? "heart" : "heart-outline"} size={24} color="red" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.forumSection}>
          <Text style={styles.sectionTitle}>Forums</Text>
          {forums.map((item, index) => (
            <View key={index} style={styles.forumCard}>
              <View style={styles.forumLocation}>
                <Text style={styles.forumTitle}>{item.title}</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.forumLocation}>
              <Text style={styles.forumSubtitle}>{item.subtitle}</Text>
              <Text style={styles.forumTime}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
        </View>
      ) : (
        <View>
          <Text style={styles.sectionTitle}>Challenges and competitions</Text>
          <View style={styles.itemList}>
            {communityData.slice(0).map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemCard} onPress={() => navigation.navigate('Video', { item })}>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.content}</Text>                  
                </View>
                <Image source={item.image} style={styles.itemImage} />
                <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(item)}>
                  <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: { color: '#fff', fontSize: 14 },
  popularSection: {
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
  popularImage: {
    width: '100%',
    height: 240,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  popularTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
  inlineInfo: { flexDirection: 'row'  },
  popularSubtitle: { color: '#888' },
  favoriteButton: {
    position: 'absolute',
    bottom: 10, 
    right: 10, 
    backgroundColor: 'transparent', 
  },

  featuredContainer: {
    marginHorizontal: 20,
    backgroundColor: '#e8f4ff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  featuredImage: { width: '100%', height: 180 },
  featuredTextContainer: {
    padding: 15,
    position: 'relative',
  },
  featuredTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  featuredSubtitle: { color: '#fff', marginLeft: 5 },
  favoriteIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  forumSection: { paddingHorizontal: 20, },
  forumCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  forumLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forumTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  forumSubtitle: { color: '#aaa', fontSize: 14, marginTop: 5 },
  forumTime: { color: '#888', fontSize: 12 },
  seeAllText: { color: '#007bff', fontSize: 12 },
  sectionTitle: { fontSize: 25, color: '#fff', paddingLeft: 20, paddingBottom: 10 },

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
  itemInfoText: { color: '#555' ,},
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

export default CommunityScreen;
