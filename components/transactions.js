import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

function Transactions() {
  const images = [
    { src: require('../assets/apple.png'), job: 'Apple Store', company: 'Entertainment', salary: "-$5,99", backgroundColor: '#fff' },
    { src: require('../assets/spotify.png'), job: 'Spotify', company: 'Music', salary: "-$12,99", backgroundColor: '#fff' },
    { src: require('../assets/moneyTransfer.png'), job: 'Money Transfer', company: 'Transaction', salary: "$300", backgroundColor: '#fff' },
    { src: require('../assets/grocery.png'), job: 'Grocery', company: 'Food Store', salary: "$88", backgroundColor: '#fff' },
    // Add more images as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Transactions</Text>
        <Text style={styles.footerLink}>See all</Text>
      </View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.smallContainer}>
              <Image source={item.src} style={styles.categoryImage} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.texts}>
                <Text style={styles.imageText}>{item.job}</Text>
                <Text style={styles.imageTask}>{item.company}</Text>
              </View>
              <View style={styles.locationSalaryContainer}>
                <Text 
                    style={[
                      styles.imageSalary, 
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
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    width: 450
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  footerText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  footerLink: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold'
  },
  imageContainer: {
    flexDirection: 'row',
    borderRadius: 24,
    padding: 10,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
    marginBottom: 10,
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
    top: -40
  },
  texts: {
    paddingTop: 10,
    paddingLeft: 15
  },
  categoryImage: {
    top: 18
  },
  blueText: {
    color: 'blue'
  },
  smallContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center'
  }
});

export default Transactions;

