import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


const Post = () => {

  const [inputHeight, setInputHeight] = useState(40);


  const handleContentSizeChange = (event) => {
    setInputHeight(event.nativeEvent.contentSize.height + 10);
  };


  return (
    <SafeAreaView style={styles.post}>
      
      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#0F172A'}}>Post recipe</Text>
      </View>

      <ScrollView>

        <View style={{padding: 16, marginTop: 10}}>
          <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>Recipe title</Text>
          <View style={{backgroundColor: '#F3F4F6', padding: 16, marginTop: 10, borderRadius: 8}}>
              <TextInput
              placeholder='Family favorite chicken soup'
              placeholderTextColor='#9CA3AF'
              />
          </View>
        </View>

        <View style={{padding: 16}}>
          <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>Description</Text>
          <View style={{backgroundColor: '#F3F4F6', padding: 16, marginTop: 10, borderRadius: 8}}>
                <TextInput
                placeholder="Example: grandma's delicious recipe..."
                placeholderTextColor='#9CA3AF'
                multiline
                onContentSizeChange={handleContentSizeChange}
                style={{height: Math.max(140, inputHeight),}}
                />
          </View>
        </View>

        <View style={{padding: 16}}>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>Recipe photo</Text>
            <View style={{backgroundColor: '#F3F4F6', padding: 16, marginTop: 10, borderRadius: 8, height: 200, alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="image" size={32} color="black" />
            </View>
        </View>

        <View style={{padding: 16, display: 'flex', gap: 10}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>Portion</Text>
                    <View style={{backgroundColor: '#F3F4F6', padding: 16, marginTop: 10, borderRadius: 8, width: 150}}>
                        <TextInput
                        placeholder="2 people"
                        placeholderTextColor='#9CA3AF'
                        />
                    </View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: '500', fontSize: 14, color: '#0F172A'}}>Cooking time</Text>
                    <View style={{backgroundColor: '#F3F4F6', padding: 16, marginTop: 10, borderRadius: 8, width: 150}}>
                        <TextInput
                        placeholder="1 hr 30 min"
                        placeholderTextColor='#9CA3AF'
                        />
                    </View>
                </View>
        </View>

        <View style={{padding: 20, marginBottom: 26, alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor: '#FB9400', height: 44, width: 180, alignItems: 'center', justifyContent: 'center', borderRadius: 8, display: 'flex', flexDirection: 'row', gap: 8}}>
              <Octicons name="upload" size={16} color="#FFF" />
              <Text style={{fontWeight: '600', fontSize: 14, color: '#FFF'}}>Upload Recipe</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFF',
    paddingVertical: 30,
  }
})


export default Post