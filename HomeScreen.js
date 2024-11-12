import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ArticlesData } from './DataSets';
import { useFavorites } from './FavoritesContext';
import { workoutData, communityData } from './DataSets';


const HomeScreen = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Madison</Text>
        <Text style={styles.subtitle}>It's time to challenge your limits.</Text>
        <View style={styles.icons}>
  <TouchableOpacity>
    <Icon name="search-outline" size={24} color="#fff" style={styles.icon} />
  </TouchableOpacity>
  <TouchableOpacity>
    <Icon name="notifications-outline" size={24} color="#fff" style={styles.icon} />
  </TouchableOpacity>
  <TouchableOpacity>
    <Icon name="person-outline" size={24} color="#fff" style={styles.icon} />
  </TouchableOpacity>
</View>

      </View>

      <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Workout')}>
          <Icon name="barbell-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="stats-chart-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Progress Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Nutrition')}>
          <Icon name="restaurant-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}  onPress={() => navigation.navigate('Community')}>
          <Icon name="people-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Community</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {workoutData.Beginner.slice(0,2).map((item,index)=>(
              <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('Video', { item })}>
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
      </View>

      <View style={styles.itemSection}>
      <TouchableOpacity style={styles.itemCard} onPress={() => navigation.navigate('Video', { item: communityData[0]})}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{communityData[0].name}</Text>
                <View style={styles.inlineInfo}>
                  <Text style={[styles.itemInfoText, { marginLeft: 3 }]} >{communityData[0].conclusion} </Text>
                </View>
              </View>
              <Image source={communityData[0].image} style={styles.itemImage} />
              <TouchableOpacity style={styles.favoriteItem} onPress={() => toggleFavorite(communityData[0])}>
                <Icon name={favorites.some(fav => fav.name === communityData[0].name) ? "heart" : "heart-outline"} size={24} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
</View>

      <View style={[styles.section, { paddingBottom: 60 }]}>
          <Text style={styles.sectionTitle}>Articles & Tips</Text>
        <View style={styles.contentContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {ArticlesData.slice(0,2).map((item,index)=>(
              <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('ArticleDetail', { item })}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                    <View style={styles.inlineInfo}>
                      <Icon name="time-outline" size={16} color="#555" />
                      <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> {item.duration}</Text>
                    </View> 
                  </View> 
                  <TouchableOpacity style={styles.favoritecard} onPress={() => toggleFavorite(item)}>
                    <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
                  </TouchableOpacity>
              </TouchableOpacity>
              ))}
            </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingTop: 30 },
  header: { padding: 20, backgroundColor: '#222' },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#888' },
  icons: { flexDirection: 'row', position: 'absolute', top: 20, right: 20 },
  icon: { marginHorizontal: 10 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  navItem: { alignItems: 'center' },
  navText: { color: '#fff', fontSize: 12 },
  section: { padding: 20 },

  seeAll: { color: '#3498db', fontSize: 14, marginTop: 5, paddingRight:30 },


  sectionTitle: { fontSize: 20, color: '#fff', paddingLeft: 15, paddingBottom: 10 },
  contentContainer: { justifyContent: 'center', alignItems: 'center' },
  card: { marginRight: 10, width: 165, backgroundColor: '#333', borderRadius: 13, overflow: 'hidden' },
  cardImage: { width: '100%', height: 100 },
  cardContent: { borderLeftWidth: 1,  borderRightWidth: 1,  borderBottomWidth: 1,  borderColor: '#fff', borderBottomLeftRadius: 13, borderBottomRightRadius: 13},
  cardTitle: { color: '#fff', fontSize: 14, fontWeight: 'bold', margin: 5 },
  cardSubtitle: { color: '#888', fontSize: 12, margin: 5 },
  favoritecard: { position:"absolute", right: 10, top:10 },
  

  itemSection: { padding: 20, backgroundColor: '#e8f4ff', marginBottom: 20, alignItems: 'center', },
  itemCard: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 20, marginVertical: 10, alignItems: 'center', },
  itemTextContainer: { flex: 1, paddingRight: 10, paddingLeft:9},
  itemName: { fontSize: 23, fontWeight: 'bold',color: '#fff', textAlign:'center' },
  itemInfoText: {color: '#fff', textAlign:'center' },
  itemImage: { width:"45%", height: 160, borderRadius: 20, }, 
  favoriteItem: { position: 'absolute', top: 10, right: 10, },


  inlineInfo: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  
});

export default HomeScreen;
