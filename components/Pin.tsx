 import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
const Pin = (props: { pin: { imageUrl: any; title: any; id: any; }; })=> {
    const {imageUrl, title,  id} = props.pin;
    const onLike = ()=> {}
    
    const [imageRatio, setImageRatio] = useState(1);
    const navigation = useNavigation();
    

    useEffect(() => {
      if(imageUrl){
        Image.getSize(imageUrl, (width, height) => setImageRatio(width/height))
      }
    }, [imageUrl])

    const goToSinglePin =()=> {
      navigation.navigate("SinglePin", {id});
    }
    return (
      <Pressable onPress={goToSinglePin}>
    <View style={styles.postpin}>
      <View>
        <Image style={[styles.image, {aspectRatio: imageRatio}]} source={{uri: imageUrl}}/>
      <View style={styles.icons}>
          <Pressable onPress={onLike} style={styles.likeBtn}>
            <AntDesign name="hearto" size={24} color="red" />
          </Pressable>
         <Entypo style={styles.share} name="dots-three-horizontal" size={24} color="white" />
      </View>
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>

      </View>
      </Pressable>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10 ,
    color: '#181818',
    lineHeight: 22,
    letterSpacing: 1,
  },
  image: {
    width: "100%",
    borderRadius: 30,
    
  },
  postpin: {
    width: '100%',
    padding: 10,
  },
  icons:{
     display: 'flex',
      justifyContent: "space-between",
      flexDirection: "row",
  },
likeBtn: {
    backgroundColor: '#D3CFD4',
      position: "absolute",
      bottom: 20,
      left: 10,
      padding: 5,
      borderRadius: 50,
},
share:{
position: "absolute",
bottom: 10,
right: 10,
}
});

export default Pin;