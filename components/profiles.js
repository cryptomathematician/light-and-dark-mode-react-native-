import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';


const Profiles = ({ isDarkMode }) => {
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const nameStyle = {
    ...styles.name,
    color: isDarkMode ? '#95969D' : '#000',
  };

  const welcomeStyle = {
    ...styles.welcome,
    color: isDarkMode ? '#fff' : '#000',
  };

  const searchContainerStyle = {
    ...styles.searchContainer,
    backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
  };

  return (
    <View style={containerStyle}>
      <View style={styles.devProfile}>
        <View style={styles.profiles}>
          <Image source={require('../assets/profile.png')} style={styles.profile} />
        </View>
        <View style={styles.texts}>
          <Text style={nameStyle}>welcome back,</Text>
          <Text style={welcomeStyle}>Eric Atsu</Text>
        </View>
        <View style={searchContainerStyle}>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    left: 40,
  },
  devProfile: {
    flexDirection: 'row',
    width: '100%',
    height: 52,
    marginVertical: 50,
    top: 10,
    marginLeft: 5,
  },
  name: {
    fontSize: 15,
    color: '#95969D',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    right: 40,
  },
  profiles: {
    top: 10,
    right: 0,
    left: 40,
  },
  texts: {
    top: 12,
    left: 15,
  },
  searchContainer: {
    left: 150,
    top: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    width: 24,
    height: 24,
  },
});

export default Profiles;
