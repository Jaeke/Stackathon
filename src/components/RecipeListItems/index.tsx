import React from 'react'
import { Text, View } from 'react-native'

const RecipeListItem = (props: any) => {
  const recipes = props.items;
  console.log('WORKINGGGGG------>',recipes)
  if(recipes === undefined ||recipes === null){
    return (
    <View>
      <Text>Loading</Text>
    </View>
  )
  }else{
    return (
      <View>
        {
          recipes.map((item)=>{
            return (
              <Text>{item.name}</Text>
            )
          })
        }

      </View>
    )
  }

}

export default RecipeListItem
