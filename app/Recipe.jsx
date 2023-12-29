import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Recipe = () => {

  const route = useRoute();
  const { item } = route.params;


  return (
    <View>
      <Text>Recipe</Text>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      

    </View>
  )
}

export default Recipe