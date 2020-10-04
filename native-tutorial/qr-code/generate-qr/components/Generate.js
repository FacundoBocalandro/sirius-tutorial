import React from 'react';
import {Container, Button} from 'native-base';
import QRCode from "react-native-qrcode-svg";
import {TextInput, Text, View} from "react-native";

function GenerateCode() {

}

export default function Generate() {
    const [value, onChangeText] = React.useState("");

    const [code, setCode] = React.useState(<></>);

    return (
        <Container>
            <TextInput
                value={value}
                onChangeText={text => onChangeText(text)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
            <Button
                onPress={() => {
                    setCode(<QRCode
                        value={value}
                        size={200}
                    />);
                }}><Text>Press to generate</Text></Button>
            <View style={{margin: 20}}>{code}</View>
        </Container>
    )
}
