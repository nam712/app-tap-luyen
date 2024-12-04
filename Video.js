import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from './FavoritesContext';
import { useNavigation } from '@react-navigation/native';
const VideoScreen = ({ route }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { item } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        <View >
            <View style={styles.popularSection}>
                <TouchableOpacity style={styles.infoContainer} >
                    <Image source={item.image} style={styles.popularImage} />
                    <TouchableOpacity style={styles.playButton}>
                        <Icon name="play-outline" size={48} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.favoriteIcon} onPress={() => toggleFavorite(item)}>
                        <Icon name={favorites.some(fav => fav.name === item.name) ? "heart" : "heart-outline"} size={24} color="red" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.forumSection}>
            <View style={styles.forumCard}>
                <Text style={styles.forumTitle}>{item.name}</Text>   
              <Text style={styles.forumSubtitle}>{item.content}</Text>
              <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Icon name="time-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>{item.duration}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="flame-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>{item.calories}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="barbell-outline" size={20} color="#007bff" />
          <Text style={styles.infoText}>{item.exercises}</Text>
        </View>
      </View>

    </View>
</View>




    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#111' },
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
    height: 450,
borderRadius:20,
  },
  popularOverlayText: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 5,
    borderRadius: 5,
  },
  popularTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 10, paddingLeft: 10 },
  inlineInfo: { flexDirection: 'row'  },
  popularSubtitle: { color: '#888' },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 20,
  },
  doneButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop:10,
  },
  doneButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold',     paddingHorizontal: 30, },
  forumSection: { paddingHorizontal: 20, },
  forumCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },

  forumTitle: { color: '#333', fontSize: 16, fontWeight: 'bold',textAlign:'center' },
  forumSubtitle: { color: '#aaa', fontSize: 14, marginTop: 5,textAlign:'center' },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderRadius:20,
    paddingVertical:15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
});

export default VideoScreen;
