import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import SearchHistoryCard from '../../components/cards/SearchHistoryCard'
import data from '../../data/data.json'
import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import LastViewedCard from '../../components/cards/LastViewedCard'
import ProfileCard from '../../components/cards/ProfileCard';

export default function TabTwoScreen({navigation}) {

  const [searchHistory, setSearchHistory] = useState([]);
  const [lastViewed, setLastViewed] = useState([]);
  const [basedOnSearch, setBasedOnSearch] = useState([]);

  


  useEffect(() => {
    
    const dataCopy = [...data];
    const slicedData = dataCopy.splice(1, 3);
    setSearchHistory(slicedData);

    const lastViewedDataCopy = [...data];
    const lastViewedSlice = lastViewedDataCopy.splice(5, 9);
    setLastViewed(lastViewedSlice);

    const basedOnSearchDataCopy = [...data];
    const basedOnSearchSlice = basedOnSearchDataCopy.splice(14, 8);
    setBasedOnSearch(basedOnSearchSlice);

  },[])


  const searchHistoryClear = (num) => {

    const clearedHistory = [...searchHistory]
    clearedHistory.splice(num, 1)
    setSearchHistory(clearedHistory)
  }

  


  return (
    <SafeAreaView style={styles.search}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Type ingredients..."
            placeholderTextColor='#9CA3AF'
          />
        </View>

        <View style={{padding: 16}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#0F172A',}}>Search history</Text>
            <TouchableOpacity>
              <Text style={{fontWeight: '500', fontSize: 14, color: '#FB9400'}}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 10}}>
            {
              searchHistory.map((item, index) => (

                <View key={item.id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.2, borderRadius: 10, height: 70, marginVertical: 2}}>
                    <SearchHistoryCard item={item} />
                    <Pressable onPress={() => searchHistoryClear(index)} style={{paddingRight: 10}}>
                      <Entypo name="cross" size={18} color="black" />
                    </Pressable>
                </View>
              ))
            }
          </View>
        </View>

        <View style={{padding: 16}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '600', fontSize: 16, color: '#0F172A'}}>Last viewed</Text>
              <TouchableOpacity>
                <Text style={{fontWeight: '500', fontSize: 14, color: '#FB9400'}}>See All</Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatList 
              data={lastViewed}
              renderItem={({item}) => <LastViewedCard item={item} navigation={navigation} />}
              keyExtractor={(item) => item.id.toString()}
              style={{marginTop: 10}}
              horizontal
              showsHorizontalScrollIndicator={false}
              />
            </View>
        </View>

        <View style={{padding: 16}}>
          <Text style={{fontWeight: '600', fontSize: 16, color: '#0F172A'}}>Based on your search</Text>
          <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10}}>
            {
              basedOnSearch.map((item) => (
                
                  <ProfileCard key={item.id} item={item} />
                
              ))
            }
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#FFF',
    paddingTop: 30,
  },
  searchInput: {
    paddingHorizontal: 16,
    paddingTop: 20,
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
  }
});
