import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SavedCard from '../../components/cards/SavedCard'
import data from '../../data/data.json'

const Saved = () => {


  return (
    <SafeAreaView style={styles.saved}>
      <View style={styles.SavedContainer}>

        <Text style={styles.titleSaved}>Recipe saved</Text>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.searchSaved}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search saved recipes..."
            placeholderTextColor='#9CA3AF'
          />
        </View>

        <View style={{ marginTop: 10, marginBottom: 20, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
            {
              data.map((item, index) => (
                <SavedCard key={index} item={item} />
              ))
            }
          </View>

          </ScrollView>

      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  saved: {
    backgroundColor: '#FFF',
    paddingVertical: 30,
  },
  SavedContainer: {
    padding: 16,
  },
  titleSaved: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchSaved: {
    paddingTop: 16,
  },
  searchInput: {
    color: 'black',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 0.4, 
    marginBottom: 10, 
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
  },
  savedList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between'
  },

})

export default Saved