import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import BouncingPreloader from 'react-native-bouncing-preloaders';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Loader() {
  return (
    <View style={styles.container}>
      <Card>
        <BouncingPreloader
          icons={[
            'https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png',
            null,
            'https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png',
            null,
            'https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png',
            null,
            'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
            null,
          ]}
          leftRotation="-680deg"
          rightRotation="360deg"
          leftDistance={-180}
          rightDistance={-250}
          speed={1200}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
