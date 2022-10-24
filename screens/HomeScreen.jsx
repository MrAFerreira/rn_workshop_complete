import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Pokemon List" onPress={() => navigation.navigate('Pokemon List')} />
      <Button title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
