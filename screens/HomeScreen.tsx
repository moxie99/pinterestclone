import { StyleSheet,  ScrollView, FlatList } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin';
import pins from "../assets//data/pins"

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, 
  }
});
