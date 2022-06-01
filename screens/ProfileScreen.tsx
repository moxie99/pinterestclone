import { StyleSheet, TouchableOpacity, Image, ScrollView  } from 'react-native';
import pins from "../assets/data/pins"
import EditScreenInfo from '../components/EditScreenInfo';
import MasonaryList from '../components/MasonaryList';
import { Text, View,} from '../components/Themed';
import {Feather, Entypo} from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} >
    <View style={styles.header}>
      <View style={styles.icons}>
        <Feather name="share" size={24} color="black" style={styles.icon}/>
        <Entypo
        name="dots-three-vertical"
        size={24}
        color="black"
        style={styles.icon}
        />
      </View>
      <Image source={{uri: "https://pbs.twimg.com/profile_images/1524741413052854274/g_0-HwQE_400x400.jpg"}} style={styles.image}/>
      <Text style={styles.title}>Jessica OS</Text>
      <Text style={styles.subtitle}>123 Subscribers || 148 Videos</Text>
    </View>
      <MasonaryList pins={pins}/>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  image:{
    width: 200,
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 10
  },
  header:{
    alignItems: "center",
  },
  icons:{
    flexDirection: "row",
    alignSelf: "flex-end",
    padding:15,
  },
  icon:{
    paddingHorizontal: 10,
  }
});
