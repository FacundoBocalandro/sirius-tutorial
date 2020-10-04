import React from "react";

export const CountSquare = (count, color) => {
    return (<div style={{
        width: 40,
        height: 40,
        borderColor: color,
        borderStyle: 'solid',
        justifyContent: "center",
        fontSize: 20,
        display: "flex",
        alignItems: 'center'
    }}>
        {count}
    </div>)
}