import { ScrollView, StyleSheet, View,  } from 'react-native';
import React from 'react';
import Pin from '../components/Pin';

interface IList{
    pins:{
        id: string;
        title: string;
        imageUrl?: string;
    }[];
}

const MasonaryList = ({pins}: IList) => {
  return (
    <ScrollView >
    <View style={styles.container}>
      {/* left column */}
      <View style={{flex: 1}}>
        {
          pins.filter((_, index) => index % 2 === 0).map((pin) => <Pin key={pin.id} pin={pin}/>)
        }
      </View>

    {/* right column */}
      <View style={{flex: 1}}>
        {
          pins.filter((_, index)=> index % 2 === 1).map((pin) => <Pin key={pin.id} pin={pin}/>)
        }
      </View>
      
       </View>
       </ScrollView>
  )
}

export default MasonaryList

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
  }
})