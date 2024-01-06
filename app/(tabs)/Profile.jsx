import { View, Text, SafeAreaView, StyleSheet, Pressable, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import ProfileCard from '../../components/cards/ProfileCard';
import data from '../../data/data.json'

const Profile = () => {

  const [isActivePro, setIsActivePro] = useState(0);

  const profileListTitles = ["My recipe", "Tested recipe", "Cookbook"]

  

  return (
    <SafeAreaView style={styles.profile}>
      <View style={styles.profileheader}>
        <Text style={styles.profiletitle}>Profile</Text>
        <Pressable style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 16, paddingVertical: 6}}>
        <View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30}}>
              <View style={{overflow: 'hidden', height: 50, width: 50, borderRadius: 50, alignItems: 'center'}}>
                  <Image source={{uri: 'https://media.istockphoto.com/id/488499958/photo/beautiful-girl-using-smartphone.jpg?s=612x612&w=0&k=20&c=VJ2YkbZsS8NOtIcAA3VJ_vjUNytAgfxjkjCYe3tk2n4='}} style={{height: 60, width: 60, objectFit: 'cover'}} />
              </View>

              <Pressable style={styles.profilecountname}>
                <Text style={styles.profileCount}>29</Text>
                <Text style={styles.countname}>Recipes</Text>
              </Pressable>

              <Pressable style={styles.profilecountname}>
                <Text style={styles.profileCount}>144</Text>
                <Text style={styles.countname}>Followers</Text>
              </Pressable>

              <Pressable style={styles.profilecountname}>
                <Text style={styles.profileCount}>306</Text>
                <Text style={styles.countname}>Following</Text>
              </Pressable>
          </View>

          <View style={{marginTop: 15}}>
            <Text numberOfLines={1} style={{fontWeight: '600', fontSize: 16, color: '#0F172A'}} >Tasya Aulianza </Text>
            <Text numberOfLines={1} style={{fontWeight: '400', fontSize: 14, color: '#9CA3AF'}} >@tasyaaauz</Text>
          </View>

          <TouchableOpacity style={{height: 44, paddingVertical: 10, paddingHorizontal: 100, backgroundColor: '#FFF5E6', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginVertical: 20}}>
            <Text style={{fontWeight: '500', fontSize: 14, alignItems: 'center', color: '#FB9400'}}>Manage profile</Text>
          </TouchableOpacity>

          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 6, paddingHorizontal: 20, gap: 6}}>
            {
              profileListTitles.map((list, index) => (
                <Pressable onPress={() => setIsActivePro(index)} key={index}>
                  <Text style={{fontSize: 14, fontWeight: '500', color: isActivePro === index ? '#0F172A' : '#94A3B8'}}>{list}</Text>
                </Pressable>
              ))
            }
          </View>

          <View style={{ marginTop: 10, marginBottom: 70, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}}>
            {
              data.map((item, index) => (
                <ProfileCard key={index} item={item} />
              ))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#FFF',
    paddingTop: 30,
  },
  profileheader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    padding: 16,
  },
  profiletitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0F172A'
  },
  settingsIcon: {
    flex: 1,
    alignItems: 'flex-end'
    
  },
  profileCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0F172A'
  },
  profilecountname: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  countname: {
    fontWeight: '400',
    fontSize: 14,
    color: '#9CA3AF'
  }

})

export default Profile