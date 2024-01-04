import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Recipe = () => {

  const router = useRouter();

  const route = useRoute();
  const { item } = route.params;

  const [unSave, setUnSave] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF', position: 'relative'}}>
      <View style={{height: 350, width: '100%', alignItems: 'center', overflow: 'hidden', position: 'relative'}}>
        <Image source={{uri: item.public_accessible_image_url}} style={{height: 350, width: '100%', objectFit: 'cover'}} />

        <TouchableOpacity onPress={router.back} style={{position: 'absolute', top: 40, left: 20, height: 35, width: 35, backgroundColor: '#FFF', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
         <Ionicons name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>

        <Pressable onPress={() => setUnSave(!unSave)} style={{position: 'absolute', top:40, right: 20, height: 35, width: 35, backgroundColor: '#FFF', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                {
                    unSave ? 
                    <Ionicons name="bookmark" size={24} color="#FB9400" /> 
                    : 
                    <Ionicons name="bookmark-outline" size={24} color="black" />
                }
        </Pressable>

      </View>

      
      
      

      <View style={{padding: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10}}>
        <Text numberOfLines={1} style={{fontWeight: '600', fontSize: 18, color: '#0F172A'}}>{item.recipe_title}</Text>
        
        <View style={{display: 'flex', gap:3, flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="star" size={16} color="#FACC15" />
                    <Text style={{fontSize: 14, color: '#94A3B8'}}>({item.rating})</Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Pressable onPress={() => router.push('/(tabs)/Profile')} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>

            <View style={{height: 40, width: 40, overflow: 'hidden', alignItems: 'center', borderRadius: 50, justifyContent: 'center'}}>
              <Image source={{uri: item.image_url}} style={{height: 50, width: 50, objectFit: 'cover'}} />
            </View>
            <View>
              <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}} >{item.name_posted}</Text>
              <Text numberOfLines={1} style={{fontWeight: '400', color: '#94A3B8', fontSize: 12}} >{item.username_posted}</Text>
            </View>

            </Pressable>
          
            <Pressable onPress={() => setIsFollowing(!isFollowing)} style={{backgroundColor: '#FFF5E6', alignItems: 'center', justifyContent: 'center', borderRadius: 8, paddingVertical: 8.5, paddingHorizontal: 18}}>
                
                {
                  !isFollowing ? <Text style={{fontWeight: '500', fontSize: 14, alignItems: 'center', color: '#FB9400'}}>Follow</Text> : <Text style={{fontWeight: '500', fontSize: 14, alignItems: 'center', color: '#FB9400'}}>Following</Text>
                }

            </Pressable>
      </View>

      <View style={{padding: 16}}>
        <Text style={{fontWeight: '600', fontSize: 16, color: '#0F172A', marginBottom: 10}}>Description</Text>
        <Text style={{fontWeight: '400', fontSize: 14, color: '#64748B', lineHeight: 22}}>{item.Description}</Text>
      </View>

      <View style={{paddingHorizontal: 16}}>
        <Text style={{fontWeight: '600', fontSize: 16, color: '#0F172A', marginBottom: 10}}>Ingredients</Text>
        {
          item?.Ingredients?.map((ingredient, index) => (
            <View key={index} style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>

              <Text style={{ fontSize: 20, color: '#64748B', lineHeight: 16, marginRight: 2 }}>{'\u2022'}</Text>
              <Text style={{fontWeight: '400', fontSize: 14, color: '#64748B', marginBottom: 6, paddingRight: 16}}>{ingredient}</Text>

            </View>
            
          ))
        }
      </View>

      <View style={{padding: 20, alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#FB9400', padding: '16', height: 44, width: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 8, display: 'flex', flexDirection: 'row', gap: 4}}>
          <Feather name="play-circle" size={16} color="#FFF" />
          <Text style={{fontWeight: '600', fontSize: 14, color: '#FFF'}}>Watch Video</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

export default Recipe