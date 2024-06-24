import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';

const Tab = createBottomTabNavigator();
const screenOptions ={
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position:"absolute",
    bottom: 0,
    elevation: 0,
    backgroundColor: "fff"
}
}
export default function App() {
  return (
     <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home" style={styles.Tab}>
          <Tab.Screen name="Home" component ={HomeScreen} style={styles.Tabs}
           options={{
            tabBarIcon: ({focused}) =>(<View style={styles.center}>
              <Image source={require('./assets/home.png')} />
              <Text>Home</Text>
            </View>
          )
           }}/>
          <Tab.Screen name="MyCards" component ={MyCardsScreen} 
            options={{
            tabBarIcon: ({focused}) =>(<View style={styles.center}>
              <Image source={require('./assets/myCards.png')} />
              <Text>My Cards</Text>
            </View>
          )
            }}
          />
          <Tab.Screen name="Statistics" component ={StatisticsScreen} 
          options={{
          tabBarIcon: ({focused}) =>(<View style={styles.center}>
            <Image source={require('./assets/statictics.png')} />
            <Text>Statistics</Text>
          </View>
          )
          }}
          />
          <Tab.Screen name="Settings" component ={Settings} 
          options={{
          tabBarIcon: ({focused}) =>(<View style={styles.center}>
            <Image source={require('./assets/settings.png')} />
            <Text>Settings</Text>
          </View>
        )
          }}
          />
        </Tab.Navigator>
     </NavigationContainer>
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
  Tab: {
    width: '50%'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

