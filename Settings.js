import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from './contexts/ThemeContext'; 

const data = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'My Profile' },
  { id: '3', title: 'Contact Us' },
  { id: '4', title: 'Change Password' },
  { id: '5', title: 'Privacy Policy' },
];

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();  // Use the context

  const containerStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : '#fff',
    paddingTop: 100,
    paddingHorizontal: 16,
  };

  const settingsTitleStyle = {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 150,
    color: isDarkMode ? '#fff' : '#000',
  };

  const itemTitleStyle = {
    fontSize: 16,
    color: isDarkMode ? '#fff' : '#000',
  };

  const separatorStyle = {
    borderBottomWidth: 1,
    borderBottomColor: isDarkMode ? '#555' : '#f0f0f0',
  };

  const modeSwitchText = {
    fontSize: 22,
    marginRight: 8,
    color: isDarkMode ? '#fff' : '#000',
  };

  const renderItem = ({ item, index }) => {
    const isLastItem = index === data.length - 1;

    return (
      <View>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={itemTitleStyle}>{item.title}</Text>
          <Feather name="chevron-right" size={24} color={isDarkMode ? '#fff' : 'black'} />
        </TouchableOpacity>
        {isLastItem && <View style={separatorStyle} />}
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      <Text style={settingsTitleStyle}>Settings</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={separatorStyle} />}
      />
      <View style={styles.modeSwitchContainer}>
        <Text style={modeSwitchText}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#90EE90' }}
          thumbColor={isDarkMode ? 'white' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  settingsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginLeft: 150,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  itemTitle: {
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginBottom: 300
  },
});

export default Settings;