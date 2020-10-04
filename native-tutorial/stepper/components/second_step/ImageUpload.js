import React, {useEffect} from "react";
import {View, Button, Image} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

const ImageUpload = (props) => {

    useEffect(() => {
        getPermissionAsync();
    });

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                props.setSelectedImage({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    return (
        <View>
            {props.selectedImage && <Image source={{uri: props.selectedImage.image}} style={{width: 200, height: 200, marginBottom: 10}}/>}
            <Button onPress={() => _pickImage()} title={"Select Image"} color={"#359c17"}/>
        </View>
    );
}

export default ImageUpload
