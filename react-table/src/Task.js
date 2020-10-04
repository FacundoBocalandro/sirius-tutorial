import {Typography} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/WarningRounded";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import React from "react";

export const Task = (rowData, handleChange) => {
    switch (rowData.task) {
        case "Assistance Requests":
            return <Typography style={{color: '#2588cf', fontWeight: 'bold'}}>ASSISTANCE
                REQUESTS</Typography>;
        case "Overdue":
            return <Typography style={{color: '#ad0000', fontWeight: 'bold'}}>OVERDUE {
                <WarningIcon/>}</Typography>;
        case "Today":
            return <Typography style={{color: '#2588cf'}}>TODAY {<ErrorIcon
                style={{color: '#ffea00'}}/>}</Typography>;
        default:
            let icon = rowData.status === 'Finished' ?
                <CheckCircleOutline fontSize={"large"}
                                    style={{color: rowData.color, marginRight: '3.5%'}}/>
                :
                <RadioButtonUnchecked fontSize={"large"}
                                      style={{color: rowData.color, marginRight: '3.5%'}}
                                      onClick={() => handleChange(rowData.id, 'Finished')}
                />;
            return (
                <div style={{
                    display: 'flex',
                    marginLeft: rowData.isSubTask ? 40 : 0,
                    alignItems: "center"
                }}>
                    {icon}
                    <div>
                        <><Typography variant={"subtitle1"}>{rowData.task.title} </Typography></>
                        <Typography variant={"body2"}>{rowData.task.content}</Typography>
                    </div>
                </div>
            )
    }
}