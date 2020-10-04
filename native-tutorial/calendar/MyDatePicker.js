import React from "react";
import {DatePicker} from "native-base";

export default function MyDatePicker(props) {
    return(<DatePicker
        defaultDate={new Date()}
        animationType={"fade"}
        textStyle={{color: "green"}}
        placeHolderTextStyle={{color: "#d3d3d3"}}
        onDateChange={props.setChosenDate}
        placeHolderText={'Select date'}
    />)}
