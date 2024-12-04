import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Workout Log');

  return (
    <View style={styles.container}>


      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Madison</Text>
          <Text style={styles.info}>Tuổi: 28</Text>
          <Text style={styles.info}>75 Kg | 1.65 CM</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Workout Log' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Workout Log')}
        >
          <Text style={styles.tabText}>Lịch sử tập luyện</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Charts' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Charts')}
        >
          <Text style={styles.tabText}>Biểu đồ</Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung tab */}
      {selectedTab === 'Workout Log' ? (
        <>
          {/* Calendar */}
          <Calendar
            style={styles.calendar}
            markedDates={{
              '2024-06-09': { marked: true, dotColor: 'blue' },
              '2024-06-12': { marked: true, dotColor: 'blue' },
            }}
          />

          {/* Activities */}
          <Text style={styles.sectionTitle}>Hoạt động</Text>
          <ScrollView>
            <View style={styles.activity}>
              <Ionicons name="barbell" size={32} color="blue" />
              <View style={{ marginLeft: 16 }}>
                <Text style={styles.activityTitle}>Tập cơ trên</Text>
                <Text style={styles.activityDetails}>Ngày: 09/06</Text>
                <Text style={styles.activityDetails}>Thời gian: 25 phút</Text>
              </View>
            </View>
            <View style={styles.activity}>
              <Ionicons name="barbell" size={32} color="blue" />
              <View style={{ marginLeft: 16 }}>
                <Text style={styles.activityTitle}>Kéo xà</Text>
                <Text style={styles.activityDetails}>Ngày: 15/04 - 4:00 PM</Text>
                <Text style={styles.activityDetails}>Thời gian: 30 phút</Text>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <View style={styles.chartsContainer}>
          <Text style={styles.chartsTitle}>Biểu đồ tiến trình</Text>
          <LineChart
            data={{
              labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
              datasets: [
                {
                  data: [5, 10, 7, 15], // Số giờ tập mỗi tuần
                },
              ],
            }}
            width={300} // Chiều rộng của biểu đồ
            height={220} // Chiều cao của biểu đồ
            chartConfig={{
              backgroundColor: '#1E1E1E',
              backgroundGradientFrom: '#333',
              backgroundGradientTo: '#1E1E1E',
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#1E1E1E',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 8,
            }}
          />
          <Text style={styles.chartsInfo}>
            Biểu đồ thể hiện số giờ tập luyện hàng tuần.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101010' },
  profile: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  profileImage: { width: 80, height: 80, borderRadius: 40, marginRight: 16 },
  name: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  info: { color: '#aaa', fontSize: 14 },
  tabs: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 8 },
  tabButton: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center' },
  activeTab: { backgroundColor: '#333' },
  tabText: { color: '#fff' },
  calendar: { margin: 16, borderRadius: 8, backgroundColor: '#1E1E1E' },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', margin: 16 },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
  },
  activityTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  activityDetails: { color: '#aaa', fontSize: 14 },
  chartsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  chartsTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  chartsInfo: { color: '#aaa', fontSize: 16, textAlign: 'center', marginTop: 16 },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
});