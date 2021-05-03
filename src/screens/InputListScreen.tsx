import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import Task from './task';
import SearchButton from '../components/SearchButton';

export default function TabOneScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const apiKey = 'bcf0f6c1640f4e15b6617b4d3b28478e';

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const checkIngredient = async (item) => {
    let ingredient = item.toLowerCase();
    const ingredientURL = `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&apiKey=${apiKey}`;
    let ingredients = await fetch(ingredientURL).then((response) =>
      response.json()
    );

    if (ingredients === null) {
      return false;
    }
    if (ingredients.results.length !== 0) {
      if (ingredients.results[0].name == ingredient) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const completeTask = (index) => {
    let copy = [...taskItems];
    copy.splice(index, 1);
    setTaskItems(copy);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Ingredients:</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    completeTask(index);
                  }}
                >
                  <Task text={item} ingredients={taskItems} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Enter Task Here'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity
          onPress={async () => {
            if ((await checkIngredient(task)) !== false) {
              handleAddTask();
            }
          }}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

        <SearchButton items={taskItems} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    maxWidth: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},

  searchBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
