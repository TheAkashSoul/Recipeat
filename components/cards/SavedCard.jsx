import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SavedCard = ({ item }) => {

  const navigation = useNavigation();

  const [unSave, setUnSave] = useState(false);

  const handleCardPress = () => {
    navigation.navigate('Recipe', { item })

  }

  const unSaveRecipe = () => {
    setUnSave(!unSave)
  }
    
  return (
    <TouchableOpacity onPress={handleCardPress} style={{height: 230, width: '48%', backgroundColor: '#FFF', marginVertical: 4, borderColor: '#94A3B8', borderWidth: 0.3, borderRadius: 5, overflow: 'hidden',}}>
      <View style={{height: 'auto', width: 'auto'}}>
        <Image source={{uri: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"}} style={{height: 140, width: "auto", objectFit: 'cover'}} />
        </View>
        <View style={{padding: 10, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'space-between'}}>
            <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 18, }}>Satay Aci</Text>

            <View style={{display: 'flex', flexDirection: 'row', gap: 10,}}>

              <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="star" size={14} color="#FACC15" />
                    <Text style={{fontSize: 12, color: '#94A3B8'}}>(4.5)</Text>
                </View>

                <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="md-time-outline" size={14} color="#64748B" />
                  <Text style={{fontSize: 12, color: '#94A3B8'}}>30 min</Text>
              </View>

            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>

              <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>

                <FontAwesome5 name="eye" size={14} color="#64748B" />
                <Text style={{color: '#94A3B8', fontSize: 12,}}>8.2K</Text>

              </View>

              <Pressable onPress={unSaveRecipe} style={{flex: 1, alignItems: 'flex-end'}}>
                {
                    !unSave ? 
                    <Ionicons name="bookmark" size={18} color="#FB9400" /> 
                    : 
                    <Ionicons name="bookmark-outline" size={18} color="black" />
                }
              </Pressable>

            </View>
        </View>
    </TouchableOpacity>
  )
}

export default SavedCard