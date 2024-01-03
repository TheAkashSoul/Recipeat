import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ProfileCard = ({ item }) => {

    const navigation = useNavigation();

    const handleProfileCard = () => {

        navigation.navigate('Recipe', {item})

    }


  return (
    <Pressable onPress={handleProfileCard} style={{width: '48%', overflow: 'hidden', borderRadius: 5, borderWidth: 0.2, marginBottom: 12,}}>
        <View style={{overflow: 'hidden', height: 160, width: '100%', borderRadius: 5, alignItems: 'center'}}>
            <Image source={{uri: item.public_accessible_image_url}} style={{width: '100%', height: 160, objectFit: 'cover'}} />
        </View>

        <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 18, color: '#0F172A', paddingHorizontal: 6, paddingTop: 6}}>{item.recipe_title}</Text>

        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

            <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', padding: 6}}>

                <FontAwesome5 name="eye" size={14} color="#64748B" />
                <Text style={{color: '#94A3B8', fontSize: 12,}}>{item.number_of_views}K</Text>
            </View>
            
            <Pressable>
                <Entypo name="dots-three-vertical" size={14} color="black" />
            </Pressable>

        </View>
    </Pressable>
  )
}

export default ProfileCard