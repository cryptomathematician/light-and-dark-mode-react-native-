import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';

function Cards({ isDarkMode }) {
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };
  return (
    <View style={containerStyle}>
       <Image source={require('../assets/Card.png')} style={styles.cards} />
    </View>
  )
}

const styles = StyleSheet.create({
    cards: {
      bottom: 180,
      left: 45,
    },
  });
  
export default Cards
