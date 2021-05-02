import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const SearchButton = (props) => {
  const navigation = useNavigation();

  const onPress = () => {

    navigation.navigate('Recipes', {props});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;
