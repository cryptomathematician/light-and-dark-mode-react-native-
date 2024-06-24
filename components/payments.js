import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import React from 'react';



function Payments() {
  return (
    <View style={styles.searchBox}>
        <View style={[styles.searchContainer, { marginRight: 12 }]}>
            <Image source={require('../assets/send.png')} style={[styles.searchImage]} />
            <Text style={styles.textType}>Sent</Text>
        </View>
        <View style={[styles.searchContainer, { marginHorizontal: 12}]}>
            <Image source={require('../assets/recieve.png')} style={[styles.searchImage]}/>
            <Text style={styles.textType}>Receive</Text>
        </View >
        <View style={[styles.searchContainer, { marginHorizontal: 12 }]}>
            <Image source={require('../assets/loan.png')} style={[styles.searchImage]} />
            <Text style={styles.textType}>Loan</Text>
        </View>
        <View style={[styles.searchContainer, { marginRight: 12}]}>
            <Image source={require('../assets/topUp.png')} style={[styles.searchImage]} />
            <Text style={styles.textType}>Topup</Text>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    searchContainer: {
        right: 70,
        top: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f0', // adjust the color as needed
        alignItems: 'center',
      },
    searchImage: {
        top: 18   
    } ,
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 150,
        top: 5,
        width: '85%'
    },
    textType : {
        marginTop: 35
    }
});

export default Payments
