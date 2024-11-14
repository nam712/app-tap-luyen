  import React from 'react';
  import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import { useFavorites } from './FavoritesContext';
  import { useNavigation } from '@react-navigation/native';
  import{nutritionData} from './DataSets'

  const NutritionScreen = () => {
    const navigation = useNavigation();
    const { favorites, toggleFavorite } = useFavorites();

    return (
      <ScrollView style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MealPlans')}>
            <Text style={styles.tabText}>Meal Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MealIdeas')}>
            <Text style={styles.tabText}>Meal Ideas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularSection}>
          <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('RecipeDetail', { item: nutritionData[0]})}>
            <Image source={nutritionData[0].image} style={styles.popularImage} />
            <Text style={styles.popularOverlayText}>Recipe of the Day</Text>
            <Text style={styles.popularTitle}>{nutritionData[0].name} </Text>
            <View style={[styles.inlineInfo, { paddingLeft: 10, paddingBottom:5 }]}>
              <Icon name="time-outline" size={16} color="#555" />
              <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{nutritionData[0].duration}</Text>
              <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
              <Text style={[styles.popularSubtitle, { marginLeft: 3 }]}>{nutritionData[0].calories}</Text>
            </View>
            <TouchableOpacity style={styles.favoritePopular} onPress={() => toggleFavorite(nutritionData[0])}>
              <Icon name={favorites.some(fav => fav.name === nutritionData[0].name) ? "heart" : "heart-outline"} size={30} color="red"/>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Recommended </Text>
        <View style={styles.contentContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {nutritionData.slice(1,3).map((item,index)=>(
              <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('RecipeVideo', { item })}>
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
          {nutritionData.slice(3).map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemCard} onPress={() => navigation.navigate('RecipeDetail', { item })}>
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
    sectionTitle: { fontSize: 20, color: '#fff', paddingLeft: 30, paddingBottom: 10 },

    container: { flex: 1, backgroundColor: '#111' },
    tabContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
    tabButton: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#333', borderRadius: 20, marginHorizontal: 10, },
    tabText: { color: '#fff', fontSize: 14, paddingLeft:20, paddingRight:20},

    popularSection: { padding: 20, backgroundColor: '#e8f4ff', marginBottom: 20, alignItems: 'center', },
    infoContainer: { backgroundColor: '#000', borderRadius: 20, width: '100%', justifyContent: 'space-around', },
    popularImage: { width: '100%', height: 165, borderTopLeftRadius: 20, borderTopRightRadius: 20, },
    popularOverlayText: { position: 'absolute', top: 10, right: 10, color: '#fff', fontSize: 16,
                          fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.5)',  padding: 5, borderRadius: 5 },
    popularTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
    favoritePopular: { position: 'absolute', bottom: 10,  right: 10,  backgroundColor: 'transparent',  },
    popularSubtitle: { color: '#888' },

    contentContainer: { justifyContent: 'center', alignItems: 'center' },
    card: { marginRight: 10, width: 165, backgroundColor: '#333', borderRadius: 13, },
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
    favoriteItem: { position: 'absolute', top: 10, right: 10, },
  });

  export default NutritionScreen;
