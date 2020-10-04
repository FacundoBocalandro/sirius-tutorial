import {Agenda} from "react-native-calendars";
import {renderEmptyData, renderItem} from "./RenderData";
import {Button, Icon} from "native-base";
import {View} from "react-native";
import React from "react";
import {styles} from './Utils';

export default function MyAgenda(props){

    return (<View style={styles.container}>
        <Agenda
            items={props.events}
            renderItem={item => renderItem(item, props.deleteItem)}
            renderEmptyData={renderEmptyData}
        />
        <Button icon onPress={props.handleOnAddChange} style={styles.addButton}>
            <Icon name='add'/>
        </Button>
    </View>)
}
