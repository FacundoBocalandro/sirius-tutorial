import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function MyTimePicker(props){
    return(<DateTimePicker
            testID="dateTimePicker"
            value={props.hour}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={(event, selectedHour) => props.setHour(selectedHour)}
        />)
}
