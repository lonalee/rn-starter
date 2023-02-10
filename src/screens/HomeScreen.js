import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const name = 'Lee';
  return (
    <View>
      <Text style={styles.text}>My HomeScreen</Text>
      <Text style={styles.textSmaller}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  textSmaller: {
    fontSize: 20,
  },
});

export default HomeScreen;
