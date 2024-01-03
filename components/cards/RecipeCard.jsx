import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = ({ item }) => {

    const [isSaved, setIsSaved] = useState(false);

    const navigation = useNavigation();

    const handleFeedPress = () => {
        navigation.navigate('Recipe', {item})
    }


    const savedRecipe = () => {
        setIsSaved(!isSaved)
    }

    
  return (
    <Pressable onPress={handleFeedPress} style={styles.cardContainer}>
        <View style={{height: 'auto', width: 'auto', alignItems: 'center', justifyContent: 'center',}}>
            <Image source={{uri: item.public_accessible_image_url}} style={{height: 150, width: 300, objectFit: 'cover'}} />
        </View>
        

      <View style={{padding: 10, display: 'flex', gap: 4,}}>
        
        <Text numberOfLines={1} style={{color: '#0F172A', fontSize: 18, fontWeight: 'bold'}}>{item.recipe_title}</Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 20,}}>
            <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name="star" size={14} color="#FACC15" />
                <Text style={{fontSize: 12, color: '#94A3B8'}}>({item.rating})</Text>
            </View>

            <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="md-time-outline" size={14} color="#64748B" />
                <Text style={{fontSize: 12, color: '#94A3B8'}}>{item.time_taken_minutes} min</Text>
            </View>
        </View>
      </View>

      <View style={{padding: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,}}>
        <View style={{height: 25, width: 25, borderRadius: 50, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: item.image_url}} style={{height: 40, width: 40}} />
        </View>
        <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 14,}}>{item.name_posted}</Text>
        <Pressable onPress={savedRecipe} style={{flex: 1, alignItems: 'flex-end'}}>
            {
                isSaved ? 
                <Ionicons name="bookmark" size={18} color="#FB9400" /> 
                : 
                <Ionicons name="bookmark-outline" size={18} color="black" />
            }
        </Pressable>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 280,
        overflow: 'hidden',
        borderRadius: 10,
        outline: '#F3F4F6',
        borderWidth: 0.2,

    },
})

export default RecipeCard