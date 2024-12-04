import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function EditProfileScreen() {
  // Trạng thái lưu trữ thông tin người dùng
  const navigation = useNavigation();
  const [profile, setProfile] = useState({
    fullName: 'Madison Smith',
    email: 'madisons@example.com',
    mobileNumber: '+123 567 89000',
    dateOfBirth: '01 / 04 / 199X',
    weight: '75 Kg',
    height: '1.65 CM',
  });

  const handleUpdateProfile = () => {
    Alert.alert(
        'Thông báo',
        'Thông tin cá nhân đã được cập nhật thành công!',
        [
          { text: 'OK', onPress: () => navigation.goBack() } // Quay lại màn hình trước đó
        ]
      );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileTitle}>Full name</Text>
          <TextInput
            style={styles.input}
            value={profile.fullName}
            onChangeText={(text) => setProfile({ ...profile, fullName: text })}
          />
          <Text style={styles.profileTitle}>Email</Text>
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
          />
          <Text style={styles.profileTitle}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={profile.mobileNumber}
            keyboardType="phone-pad"
            onChangeText={(text) => setProfile({ ...profile, mobileNumber: text })}
          />
          <Text style={styles.profileTitle}>Date of birth</Text>
          <TextInput
            style={styles.input}
            value={profile.dateOfBirth}
            onChangeText={(text) => setProfile({ ...profile, dateOfBirth: text })}
          />
          <Text style={styles.profileTitle}>Weight</Text>
          <TextInput
            style={styles.input}
            value={profile.weight}
            keyboardType="numeric"
            onChangeText={(text) => setProfile({ ...profile, weight: text })}
          />
          <Text style={styles.profileTitle}>Height</Text>
          <TextInput
            style={styles.input}
            value={profile.height}
            keyboardType="numeric"
            onChangeText={(text) => setProfile({ ...profile, height: text })}
          />
        </View>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },

  body: {
    padding: 15,
  },
  profileInfo: {
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#444',
  },
  updateButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});