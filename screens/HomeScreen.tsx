import { StyleSheet,  ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin'

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Pin 
      pin={{
        title:"Just Chilling",
        imageUrl:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"
       }}/>
      <Pin 
      pin={{
        title:"Just Coding",
        imageUrl:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"
       }}/>
      <Pin 
      pin={{
        title:"Just Computers",
        imageUrl:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg"
       }}/>
      <Pin 
      pin={{
        title:"Just Gaming",
        imageUrl:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg"
       }}/>
      <Pin 
      pin={{
        title:"Just Driving",
        imageUrl:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg"
       }}/>
       </View>
       </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
});
