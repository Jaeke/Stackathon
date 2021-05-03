import * as React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import RecipeListItem from '../components/RecipeListItems';
import { useEffect, useState, Component } from 'react';

// import users from '../data/Users'

export default function RecipeScreen(props) {
  const items = props.route.params.props.items;
  const apiKey = 'ef00525427ee4597b08ccf0675fa5506';

  let [task, setTask] = useState();

  useEffect(() => {
    async function fetchdata() {
      if (!props.fetched) {
        task = await searchForRecipe(items);
        setTask(task);
      }
    }
    fetchdata();
  }, []);

  // stack navigation for recipe page
  const searchForRecipe = async (ingredients) => {
    let ingredientsString = ingredients.join(',+');
    const recipeURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsString}&apiKey=${apiKey}`;
    let recipies = await fetch(recipeURL).then((response) => response.json());
    recipies.filter((food) => {
      food.missedIngredientCount < 5;
    });
    let filteredInfo = [];
    recipies.map((food) => {
      let infoObj = {
        id: food.id,
        name: food.title,
        imageUrl: food.image,
      };
      filteredInfo.push(infoObj);
    });
    return filteredInfo;
  };

  return (
    <View style={styles.container}>
      <RecipeListItem items={task} />
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
