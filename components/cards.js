import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';

function Cards() {
  return (
    <View>
       <Image source={require('../assets/Card.png')} style={styles.cards} />
    </View>
  )
}

const styles = StyleSheet.create({
    
  });
  
export default Cards
