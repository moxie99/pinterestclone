import { Text, View, StyleSheet, Image, SafeAreaView, Pressable } from "react-native";
import {StatusBar} from 'expo-status-bar';
import pins from '../assets/data/pins';
import {useEffect, useState} from 'react';
import {Ionicons} from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
const SinglePin = ()=> {
    
const [imageRatio, setImageRatio] = useState(1);
const navigation = useNavigation();
const route = useRoute();
const insets = useSafeAreaInsets();
const pinId = route.params?.id;

const pin = pins.find((p) => p.id === pinId);

     useEffect(() => {
      if(pin?.imageUrl){
        Image.getSize(pin?.imageUrl, (width, height) => setImageRatio(width/height))
      }
    }, [pin])
 
    if(!pin){
        return (<Text>Pin not found</Text>);
    }

    const goBack = ()=> {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={{backgroundColor:"black"}}>
            <StatusBar style="light"/>
            <View style={styles.singlePinContainer}>
            <Image source={{uri: pin.imageUrl}} style={[styles.image, {aspectRatio:imageRatio}]}/>
            <Text style={styles.title}>{pin.title}</Text>
        </View>
        <Pressable style={[styles.backBtn, {top: insets.top + 20}]} onPress={goBack}>
             <Ionicons  name={"chevron-back"} size={30} color={"white"}/>
        </Pressable>
    </SafeAreaView>
 
    );
}
const styles = StyleSheet.create({
    singlePinContainer:{
        height: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    image: {
        width:"100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    title: {
        margin: 20,
        fontSize: 35,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 20,
    },
    backBtn: {
        height: 20,
        width: 20,
        position: "absolute",
        left: 10,
    }
})
export default SinglePin;