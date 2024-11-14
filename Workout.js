import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';
import {workoutData} from './DataSets'
import { useNavigation } from '@react-navigation/native';
const WorkoutScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Beginner');
  const { favorites, toggleFavorite } = useFavorites();
  
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

      <View style={styles.popularSection}>
        <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Video', { item: workoutData[activeTab][0]})}>
          <Image source={workoutData[activeTab][0].image} style={styles.popularImage} />
          <Text style={styles.popularOverlayText}>Training of the Day</Text>
          <Text style={styles.popularTitle}>{workoutData[activeTab][0].name}</Text>
          <View style={[styles.inlineInfo, { paddingLeft: 10, paddingBottom:5 }]}>
            <Icon name="time-outline" size={16} color="#555" />
            <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{workoutData[activeTab][0].duration}</Text>
            <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
            <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{workoutData[activeTab][0].calories}</Text>
            <Icon name="barbell-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
            <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{workoutData[activeTab][0].exercises}</Text>
          </View>
          <TouchableOpacity style={styles.favoritePopular} onPress={() => toggleFavorite(workoutData[activeTab][0])}>
            <Icon name={favorites.some(fav => fav.name === workoutData[activeTab][0].name) ? "heart" : "heart-outline"} size={35} color="red" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <Text style={styles.maintitle}>Let's Go {activeTab}</Text>
      <Text style={styles.titlecontent}>Explore Different Workout Styles</Text>
      <View style={styles.itemList} >
        {workoutData[activeTab].slice(1).map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemCard} onPress={() => navigation.navigate('Video', { item })}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.inlineInfo}>
                <Icon name="time-outline" size={16} color="#555" />
                <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.duration}</Text>
                <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.calories}</Text>
              </View>
              <View style={styles.exerciseInfo}>
                <Icon name="barbell-outline" size={16} color="#555" />
                <Text style={[styles.itemInfoText, { marginLeft: 3 }]}>{item.exercises}</Text>
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
  inlineInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  container: { flex: 1, backgroundColor: '#111' },
  header: { padding: 15, backgroundColor: '#222' },
  tabContainer: { flexDirection: 'row', marginTop: 10, },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center',borderRadius:17 },
  activeTab: { backgroundColor: '#3498db' },
  tabText: { color: '#fff', fontSize: 14 },
  
  popularSection: { padding: 20, backgroundColor: '#e8f4ff', marginBottom: 20, alignItems: 'center' },
  infoContainer: { backgroundColor: '#000', borderRadius: 20, width: '100%', justifyContent: 'space-around' },
  popularImage: { width: '100%', height: 165, borderTopLeftRadius: 20, borderTopRightRadius: 20, },
  popularOverlayText: { position: 'absolute', top: 10, right: 10, color: '#fff', fontSize: 16,
                        fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)',  padding: 5, borderRadius: 5 },
  popularTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
  popularSubtitle: { color: '#888' },
  favoritePopular: { position: 'absolute', bottom: 10,  right: 10,  backgroundColor: 'transparent',  },

  maintitle: { fontSize: 18, color: '#fff', paddingLeft: 20, paddingBottom: 10 },
  titlecontent: { fontSize: 14, color: '#fff', paddingLeft: 20 },
  itemList: { paddingHorizontal: 20 },
  itemCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 20, marginVertical: 10, alignItems: 'center', },
  itemTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  itemName: { fontSize: 23, fontWeight: 'bold' },
  itemInfoText: { color: '#555' ,},
  exerciseInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  itemImage: { width:"45%", height: 120, borderRadius: 20, }, 
  favoriteItem: { position: 'absolute', top: 10, right: 10, },
});



export default WorkoutScreen;
