import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const LastViewedCard = ({item}) => {

    const navigation = useNavigation();

    const lastViewedItem = () => {
        navigation.navigate('Recipe', {item})
    }



  return (
    <Pressable onPress={lastViewedItem} key={item.id} style={{borderRadius: 10, overflow: 'hidden', marginRight: 10, width: 150, borderWidth: 0.2}}>
            <View style={{height: 90, width: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden', alignItems: 'center'}}>
              <Image source={{uri: item.public_accessible_image_url}} style={{height: '100%', width: '100%', objectFit: 'cover'}} />
            </View>
    
            <View style={{padding: 10}}>
              <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>{item.recipe_title}</Text>
    
              <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Entypo name="star" size={14} color="#FACC15" />
                        <Text style={{fontSize: 12, color: '#94A3B8'}}>({item.rating})</Text>
              </View>
            </View>
    </Pressable>
        
     
  )
}

export default LastViewedCard