import * as React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed'
import RecipeListItem from '../components/RecipeListItems'

// import users from '../data/Users'

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text>Recipe Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
