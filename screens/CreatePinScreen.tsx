import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
const [description, setDescription] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = ()=>{
        
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Button title="Upload your Sonorous Melodious Voice" onPress={pickImage} />
      {image && 
      <>
      <Image source={{ uri: image }} style={{ width: "100%", aspectRatio: 1, marginVertical: 10, }} />
      <TextInput  style={styles.input} value={description} onChangeText={setDescription}  placeholder="Describe Your Content" numberOfLines= {4} />
       <Button title="Submit For Review" onPress={onSubmit} />
      </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: "100%",
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5
    }
})