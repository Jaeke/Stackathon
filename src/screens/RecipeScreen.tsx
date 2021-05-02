import * as React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed'
import RecipeListItem from '../components/RecipeListItems'
import { useEffect } from 'react'

// import users from '../data/Users'

export default function RecipeScreen() {

  // useEffect(() => {
  //   const fetchRecipes = asyn () => {
  //     try {
  //       const recipeData = await
  //     } catch (error) {

  //     }
  //   }
  //   fetchRecipes();
  // }, [])




  return (
    <View style={styles.container}>
      {/* <FlatList
        style={{width: '100%'}}
        keyExtractor={(item) => item.id}
      /> */}
      <RecipeListItem />
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
