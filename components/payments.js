import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { ThemeProvider } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { DollarOutlined } from '@ant-design/icons'

const Payments = ({ isDarkMode }) => {
  const searchContainerStyle = {
    ...styles.searchContainer,
    backgroundColor: isDarkMode ? '#121212' : '#f0f0f0',
  };
  const searchBoxStyle = {
    ...styles.searchBox,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };
  const textTypeStyle = {
    ...styles.textType,
    color: isDarkMode ? '#fff' : '#000',
  };
  const searchImageStyle = {
    ...styles.searchImage,
  };

  return (
      <View style={searchBoxStyle}>
      <View style={[searchContainerStyle, { marginRight: 12 }]}>
      <Icon name="arrow-up-outline" color={isDarkMode ? '#fff' : '#000'} top={18} size={24}/>
        <Text style={textTypeStyle}>Sent</Text>
      </View>
      <View style={[searchContainerStyle, { marginHorizontal: 12}]}>
       <Icon name="arrow-down-outline" color={isDarkMode ? '#fff' : '#000'} top={18} size={24}/>
        <Text style={textTypeStyle}>Receive</Text>
      </View >
      <View style={[searchContainerStyle, { marginHorizontal: 12 }]}>
        <Image source={require('../assets/loan.png')} color={isDarkMode ? '#fff' : '#000'} top={18} size={24}/>
        <Text style={textTypeStyle}>Loan</Text>
      </View>
      <View style={[searchContainerStyle, { marginRight: 12}]}>
        <Image source={require('../assets/topUp.png')} color={isDarkMode ? '#fff' : '#000'} top={18} size={24}/>
        <Text style={textTypeStyle}>Topup</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  searchContainer: {
    right: 70,
    top: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
  searchImage: {
    top: 18,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 110,
    bottom:150,
    width: '85%',
  },
  textType: {
    marginTop: 43,
  },
});

export default Payments;
