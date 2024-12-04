import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const searchResults = [
    { id: '1', title: 'Squat Exercise', category: 'Workout' },
    { id: '2', title: 'Full Body Stretching', category: 'Workout' },
    { id: '3', title: 'Delights With Greek Yogurt', category: 'Nutrition' },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        placeholderTextColor="#888" // Màu chữ gợi ý
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
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
    borderColor: '#333', // Viền xám đậm
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#2C2C2C', // Nền xám nhẹ
    color: '#fff', // Màu chữ trắng
  },
  resultItem: {
    marginBottom: 15,
    backgroundColor: '#2E1E3C', // Nền tím than nhẹ
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00BBD3', // Màu xanh dương nổi bật
  },
  category: {
    fontSize: 14,
    color: '#ccc', // Màu chữ xám nhạt
  },
});

export default SearchScreen;
