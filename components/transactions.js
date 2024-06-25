import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Transactions = ({ isDarkMode }) => {
  const images = [
    { src: require('../assets/apple.png'), job: 'Apple Store', company: 'Entertainment', salary: "-$5,99" },
    { src: require('../assets/spotify.png'), job: 'Spotify', company: 'Music', salary: "-$12,99" },
    { src: require('../assets/moneyTransfer.png'), job: 'Money Transfer', company: 'Transaction', salary: "$300" },
    { src: require('../assets/grocery.png'), job: 'Grocery', company: 'Food Store', salary: "$88" },
    // Add more images as needed
  ];

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#000' : '#fff',
    bottom: 50
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  const footerTextStyle = {
    ...styles.footerText,
    color: isDarkMode ? '#fff' : '#000',
  };

  const footerLinkStyle = {
    ...styles.footerLink,
    color: isDarkMode ? 'blue' : 'blue',
  };
  
  const smallContainerStyle = {
    ...styles.smallContainer,
    backgroundColor: isDarkMode ? '#121212' : '#fff',
  };
  

  const imageContainerStyle = {
    ...styles.imageContainer,
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <View style={containerStyle}>
      <View style={styles.footerContainer}>
        <Text style={footerTextStyle}>Transactions</Text>
        <Text style={footerLinkStyle}>See all</Text>
      </View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={imageContainerStyle}>
            <View style={smallContainerStyle}>
              <Image source={item.src} style={styles.categoryImage} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.texts}>
                <Text style={[styles.imageText, textStyle]}>{item.job}</Text>
                <Text style={[styles.imageTask, textStyle]}>{item.company}</Text>
              </View>
              <View style={styles.locationSalaryContainer}>
                <Text 
                    style={[
                      styles.imageSalary, 
                      textStyle, 
                      item.salary === "$300" && styles.blueText
                    ]}
                 >
                {item.salary}
                </Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:0}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 450,
    bottom: 0,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerLink: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    borderRadius: 24,
    padding: 0,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  imageText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageTask: {
    fontSize: 14,
    color: 'gray',
  },
  locationSalaryContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  imageSalary: {
    fontWeight: 'bold',
    fontSize: 14,
    left: 110,
    top: -40,
  },
  texts: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  categoryImage: {
    top: 18,
  },
  blueText: {
    color: 'blue',
  },
  smallContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
});

export default Transactions;

