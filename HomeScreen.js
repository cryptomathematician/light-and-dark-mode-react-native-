import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import Profiles from './components/profiles';
import Cards from './components/cards';
import Payments from './components/payments';
import Transactions from './components/transactions';

export default function HomScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
       <Profiles />
       <Cards />
       <Payments/>
       <Transactions/>
    </ScrollView>
  );
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
});
