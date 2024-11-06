import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ContactScreen() {
  const [isFAQ, setIsFAQ] = useState(true); // Toggle between FAQ and Contact Us
  const [expandedFAQs, setExpandedFAQs] = useState([false, false, false, false, false]); // Track FAQ expanded state
  const [searchQuery, setSearchQuery] = useState(''); // Store the search query

  const faqs = [
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem hello de buas gsmrs' },
    { question: 'Consectetur adipiscing elit?', answer: 'Answer for question 2' },
    { question: 'Integer nec odio?', answer: 'Answer for question 3' },
    { question: 'Praesent libero?', answer: 'Answer for question 4' },
    { question: 'Sed cursus ante dapibus diam?', answer: 'Answer for question 5' }
  ];

  // Filter FAQs based on the search query
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setExpandedFAQs((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & FAQs</Text>
      <Text style={styles.subtitle}>How Can We Help You?</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, isFAQ && styles.activeTab]}
          onPress={() => setIsFAQ(true)}
        >
          <Text style={styles.tabText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, !isFAQ && styles.activeTab]}
          onPress={() => setIsFAQ(false)}
        >
          <Text style={styles.tabText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {isFAQ ? (
        <ScrollView style={styles.faqContainer}>
          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search FAQs"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Filtered FAQ items */}
          {filteredFAQs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.faqQuestionContainer}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Icon name={expandedFAQs[index] ? "chevron-up" : "chevron-down"} size={20} color="#00BBD3" />
              </TouchableOpacity>
              {expandedFAQs[index] && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={styles.contactContainer}>
          {/* Contact Us options */}
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome5 name="headset" size={24} color="#00BBD3" />
            <Text style={styles.contactText}>Customer Service</Text>
            <Icon name="chevron-forward" size={20} color="#00BBD3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome5 name="globe" size={24} color="#00BBD3" />
            <Text style={styles.contactText}>Website</Text>
            <Icon name="chevron-forward" size={20} color="#00BBD3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome5 name="whatsapp" size={24} color="#00BBD3" />
            <Text style={styles.contactText}>WhatsApp</Text>
            <Icon name="chevron-forward" size={20} color="#00BBD3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome5 name="facebook" size={24} color="#00BBD3" />
            <Text style={styles.contactText}>Facebook</Text>
            <Icon name="chevron-forward" size={20} color="#00BBD3" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome5 name="instagram" size={24} color="#00BBD3" />
            <Text style={styles.contactText}>Instagram</Text>
            <Icon name="chevron-forward" size={20} color="#00BBD3" />
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 16,
  },
  title: {
    paddingTop:20,
    color: '#00BBD3',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#00BBD3',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  faqContainer: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 10,
    borderBottomColor: '#00BBD3',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  faqQuestion: {
    color: '#fff',
    fontSize: 16,
  },
  faqAnswer: {
    color: '#bbb',
    fontSize: 14,
    marginTop: 5,
    paddingLeft: 10,
  },
  contactContainer: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#00BBD3',
    borderBottomWidth: 1,
  },
  contactText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
});
