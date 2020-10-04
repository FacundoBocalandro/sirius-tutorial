import WarningIcon from "@material-ui/icons/WarningRounded";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import React from "react";
import {checkColor, errorColor, warningColor} from "./Utils";

export const DueDate = (rowData) => {
    if (!rowData.dueDate) return '';
    const comp = compareDateToToday(rowData.dueDate);
    let icon = comp < 0 ? <WarningIcon style={{color: warningColor}}/> :
        comp > 0 ? <CheckCircleIcon style={{color: checkColor}}/> :
            <ErrorIcon style={{color: errorColor}}/>;
    return (
        <>
            {rowData.dueDate}
            {icon}
        </>
    )
}

const compareDateToToday = (d) => {
    const rowDate = new Date(d);
    rowDate.setHours(0, 0, 0, 0);
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    return rowDate.getTime() - newDate.getTime();
}