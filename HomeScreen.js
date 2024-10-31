import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
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
        <TouchableOpacity style={styles.navItem}>
          <Icon name="restaurant-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/home-pic/squat.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Squat Exercise</Text>
              <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 12 Minutes</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 120 Kcal</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/home-pic/stretching.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Full Body Stretching</Text>
              <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 12 Minutes</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 120 Kcal</Text>
                </View> 
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

 
<TouchableOpacity style={styles.weeklyChallenge}>
  <View style={styles.weeklyTextContainer}>
    <Text style={styles.weeklyTitle}>Weekly Challenge</Text>
    <Text style={styles.weeklySubtitle}>Plank With Hip Twist</Text>
  </View>
  <Image source={require('./assets/home-pic/plank.png')} style={styles.weeklyImage} />
</TouchableOpacity>


      <View style={[styles.section, { paddingBottom: 60 }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.sectionTitle}>Articles & Tips</Text>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/home-pic/supplement-guide.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Supplement Guide</Text>
              <View style={{ marginTop: 15 }}>
                <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 10 Minutes</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 70 Kcal</Text>
                </View>             
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('./assets/home-pic/daily-routines.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>15 Quick & Effective Daily Routines</Text>
              <View style={styles.inlineInfo}>
                  <Icon name="time-outline" size={16} color="#555" />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 5 Minutes</Text>
                  <Icon name="flame-outline" size={16} color="#555" style={{ marginLeft: 10 }} />
                  <Text style={[styles.cardSubtitle, { marginLeft: 1 }]}> 100 Kcal</Text>
                </View> 
            </TouchableOpacity>
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
  sectionTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold', paddingLeft:20},
  seeAll: { color: '#3498db', fontSize: 14, marginTop: 5, paddingRight:30 },
  contentContainer: { justifyContent: 'center', alignItems: 'center' },
  card: { marginRight: 10, width: 165, backgroundColor: '#333', borderRadius: 8, overflow: 'hidden' },
  cardImage: { width: '100%', height: 100 },
  cardTitle: { color: '#fff', fontSize: 14, fontWeight: 'bold', margin: 5 },
  cardSubtitle: { color: '#888', fontSize: 12, margin: 5 },
  inlineInfo: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  weeklyChallenge: {
    padding: 20,
    backgroundColor: '#e8f4ff',
    borderRadius: 8,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  weeklyImage: { width: '50%', height: 150, borderRadius: 8 },
  weeklyTextContainer: {
    flex: 1,
    paddingRight: 20,
  },
  weeklyTitle: { fontSize: 30, fontWeight: 'bold', color: '#333',textAlign:'center' },
  weeklySubtitle: { fontSize: 14, color: '#555', marginVertical: 10, textAlign:'center' },
});

export default HomeScreen;
