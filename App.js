import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

function App() {
  const { isDarkMode } = useTheme();

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      elevation: 0,
      backgroundColor: isDarkMode ? "#121212" : "#fff", // Change background color based on theme
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home" style={styles.Tab}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.center}>
                <View style={styles.iconContainer}>
                  <Image source={require('./assets/home.png')} style={styles.icon} />
                </View>
                <Text style={[styles.iconText, { color: isDarkMode ? '#fff' : '#000' }]}>Home</Text>
              </View>
            )
          }} />
        <Tab.Screen name="MyCards" component={MyCardsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.center}>
                <View style={styles.iconContainer}>
                  <Image source={require('./assets/myCards.png')} style={styles.icon} />
                </View>
                <Text style={[styles.iconText, { color: isDarkMode ? '#fff' : '#000' }]}>My Cards</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Statistics" component={StatisticsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.center}>
                <View style={styles.iconContainer}>
                  <Image source={require('./assets/statictics.png')} style={styles.icon} />
                </View>
                <Text style={[styles.iconText, { color: isDarkMode ? '#fff' : '#000' }]}>Statistics</Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Settings" component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.center}>
                <View style={styles.iconContainer}>
                  <Image source={require('./assets/settings.png')} style={styles.icon} />
                </View>
                <Text style={[styles.iconText, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
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
  },

  icon: {
    width: 24,
    height: 24,
  },
  iconText: {
    marginTop: 4,
    fontSize: 12,
  }
});

