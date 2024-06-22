import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import React from 'react';


function Profiles() {
  return (
    <View style={styles.devProfile}>
        <View style={styles.profiles}>
            <Image source={require('../assets/profile.png')} style={styles.profile} />
        </View>
        <View style={styles.texts}>
            <Text style={styles.name}>welcome back,</Text>
            <Text style={styles.welcome}>Eric Atsu</Text>
        </View>
        <View style={styles.searchContainer}>
        <Image source={require('../assets/search.png')} style={styles.searchImage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      alignItems: 'center',
      paddingBottom: 40,
      paddingTop: 0,
    },
    devProfile: {
      flexDirection: 'row',
      width: '100%',
      height: 52,
      marginVertical: 50, // equivalent to gap
      top: 10,
      left: 30,
      marginLeft: 5
    },
    name: {
      fontSize: 15,
      color: '#95969D'
    },
    welcome: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    profileImage: { // Added this line to make the elements row-based
      alignItems: 'center', // Vertically center the elements
      justifyContent: 'space-between', // Distribute the elements with space between
    },
    profile: {
      right: 40,
    },
    profiles: {
      top: 10,
      right: 0,
      left: 40
    },
    texts: {
        top: 12,
        left: 15
    },
    searchContainer: {
        left: 150,
        top: 15,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f0f0f0', // adjust the color as needed
        justifyContent: 'center',
        alignItems: 'center',
      },
      searchImage: {
        width: 24,
        height: 24,
      }
  });
  

export default Profiles
