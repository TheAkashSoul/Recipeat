import { View, Text, SafeAreaView, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import RecipeCard from '../../components/cards/RecipeCard'
import data from '../../data/data.json'
import ProfileCard from '../../components/cards/ProfileCard';


const index = () => {

  const [menuItemIndex, setMenuIemIndex] = useState(0);
  const [menuSelected, setMenuSelected] = useState(0);

  const itemMenuList = [
    "Chicken", 
    "Beef Meat", 
    "Shrimp", 
    "Cucumbar", 
    "Fish", 
    "Broccoil", 
    "Egg", 
    "Pork", 
    "Goat"
  ];

  const foodMenu = [
    'All',
    'Chilli Chicken',
    'Fried Rice',
    'Egg Curry',
    'Pasta Carbonara',
    'Beef Stroganoff',
    'Sushi Rolls',
    'Paneer Tikka Masala',
    'Tandoori Chicken',
    'Pad Thai Noodles',
    'Hamburger',
    'Pizza Margherita',
    'Grilled Salmon',
    'Mushroom Risotto',
    'Chicken Shawarma',
    'Vegetable Stir-Fry'
  ];

  const router = useRouter();

  const gotoProfile =() => {
    router.push("/(tabs)/Profile")
  }

  return (
    <SafeAreaView style={styles.home}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.profileContainer}>
        {/* Profile DP Image  */}
        <View style={styles.profileDP}>
          <Pressable onPress={gotoProfile}>
              <Image source={{ uri: 'https://media.istockphoto.com/id/488499958/photo/beautiful-girl-using-smartphone.jpg?s=612x612&w=0&k=20&c=VJ2YkbZsS8NOtIcAA3VJ_vjUNytAgfxjkjCYe3tk2n4=' }}
              style={{ width: 50, height: 50 }} />
          </Pressable>
        </View>
        {/* Profile user name  */}
        <View>
          <Text style={styles.welcome}>Welcome, 👋🏻</Text>
          <Text style={styles.userName}>Tasya Aulianza </Text>
        </View>
        {/* Bell icon */}
        <Pressable style={styles.notificationIcon}>
          <EvilIcons name="bell" size={30} color="black" />
        </Pressable>
      </View>

      <View style={styles.searchInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Type ingredients..."
          placeholderTextColor='#9CA3AF'
        />
      </View>

      <View style={styles.recipeList}>
        <Text style={styles.listTitle}>What's in your fridge?</Text>
        <View style={styles.listMenuContainer}>
          {itemMenuList.map((item, index) => (
            <Pressable onPress={() => setMenuIemIndex(index)} key={index} style={[styles.itemMenustyle, {backgroundColor: menuItemIndex === index ? '#FB9400' : '#F3F4F6'}]}>
              <Text style={[styles.menuItem, {color: menuItemIndex === index ? '#FFF' : '#9CA3AF'}]}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', gap: 18, marginTop: 30}}>
            {
              foodMenu.map((menu, index) => (
                <Pressable  key={index} onPress={() => setMenuSelected(index)}>
                  <Text style={{color: menuSelected === index? '#0F172A' : '#94A3B8', fontSize: 16,}}>{menu}</Text>
                </Pressable>
              ))
            }
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recipeCards}>
            {
              data.map((item, index) => (
                <RecipeCard key={index} item={item} />
              ))
            }
          </View>
        </ScrollView>

        <View style={styles.recipeListFeed}>
          <Text style={styles.listTitleFeed}>Today Special</Text>
          <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',}}>
            {
              data.map((item, index) => (
                <ProfileCard key={index} item={item} />
              ))
            }
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFF',
    paddingTop: 30,
  },
  profileContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    padding: 16,
  },
  profileDP: {
    height: 40, 
    width: 40, 
    borderRadius: 50, 
    overflow: 'hidden', 
    alignItems: 'center'
  },
  welcome: {
    color: '#9CA3AF',
    fontSize: 14,
    fontStyle: 'normal',
  },
  userName: {
    color: '#0F172A',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  notificationIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchInput:{
    paddingHorizontal: 16,
  },
  textInput: {
    color: 'black',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 0.4, 
    marginBottom: 10, 
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
  },
  recipeList: {
    padding: 16,
  },
  listTitle: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  listMenuContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  itemMenustyle: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#F3F4F6',
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#9CA3AF'
  },
  recipeCards: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  recipeListFeed: {
    paddingTop: 16
  },
  listTitleFeed: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  }


})

export default index