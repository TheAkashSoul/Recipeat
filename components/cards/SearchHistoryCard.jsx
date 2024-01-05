import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const SearchHistoryCard = ({item}) => {

    const navigation = useNavigation();

    const searchHistoryPress = () => {
        navigation.navigate('Recipe', {item})
    }


  return (
    <TouchableOpacity onPress={searchHistoryPress} style={{height: 70, width: '90%', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 18}}>
      <View style={{height: '100%', width: 80, overflow: 'hidden', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
        <Image source={{uri: item.public_accessible_image_url}} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
      </View>
      <View>
        <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>{item.recipe_title}</Text>
        <Text style={{fontWeight: '400', fontSize: 12, color: '#94A3B8'}}>{item.id} days ago</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SearchHistoryCard