import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import { workoutData, nutritionData, mealplanData, mealideaData } from './DataSets'; // Đường dẫn phù hợp đến file dữ liệu của bạn

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // Kết hợp tất cả dữ liệu vào một mảng
  const allData = [
    ...workoutData.Beginner,
    ...workoutData.Intermediate,
    ...workoutData.Advanced,
    ...nutritionData,
    ...mealplanData,
    ...mealideaData.Breakfast,
    ...mealideaData.Lunch,
  ];

  // Hàm xử lý tìm kiếm
  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setFilteredResults([]);
    } else {
      const results = allData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Image source={item.image} style={styles.resultImage} />
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.category}>
                {item.duration} | {item.calories}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E1E', // Nền tối (xám đen)
  },
  searchInput: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#2C2C2C', // Nền xám tối
    color: '#fff', // Màu chữ trắng
  },
  resultItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#2C2C2C', // Nền xám tối
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  resultImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Màu chữ trắng cho tiêu đề
  },
  category: {
    fontSize: 14,
    color: '#ccc', // Màu xám nhạt cho thông tin phụ
  },
});

export default SearchScreen;