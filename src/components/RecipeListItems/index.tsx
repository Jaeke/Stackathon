import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles';
import { Card, Title } from 'react-native-paper'
import Loader from '../../services/loader'

const RecipeListItem = (props: any) => {

  const recipes = props.items;
  console.log('WORKINGGGGG------>',recipes)
  if(recipes === undefined ||recipes === null){
    return (
    <View>
      <Loader />
    </View>
  )
  }else{
    return (
      <ScrollView>
        <View>
          {
            recipes.map((item)=>{
              return (
                <Card key={item.id} style={styles.container}>
                  <Card.Content>
                    <Title>{item.name}</Title>
                  </Card.Content>

                  <Card.Cover source={{uri: item.imageUrl}}
                    key={item.id}
                    style={{
                      resizeMode: "contain",
                      height: '100%',
                      width: '100%',
                      flex: 1,
                    }}
                  />
                </Card>
              )
            })
          }
        </View>

      </ScrollView>
    )
  }

}

export default RecipeListItem
