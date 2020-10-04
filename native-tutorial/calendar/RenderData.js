import React from "react";
import {Text, TouchableHighlight, View} from "react-native";
import {styles} from './Utils';
import {Alert} from "react-native";


export const renderItem = (item, deleteItem) => {
    return (
        <TouchableHighlight
            style={[styles.item, {backgroundColor: item.color}]}
            onPress={() => Alert.alert(
                `Delete ${item.name}`,
                `Delete ${item.name}`,
                [
                    {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => deleteItem(item) }
                ],
            )}
        >
            <Text>{item.name + '\n'} {item.start} to {item.end}</Text>
        </TouchableHighlight>
    )
}


export const renderEmptyData = () => {return (
    <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
    </View>
)}
