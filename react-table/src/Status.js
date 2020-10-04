import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export const Status = (rowData, handleChange) => {
    return(
        rowData.task.title ?
            <Select
                value={rowData.status}
                onChange={e => handleChange(rowData.id, e.target.value)}
            >
                <MenuItem value={'To Do'}>To Do</MenuItem>
                <MenuItem value={'In Progress'}>In Progress</MenuItem>
                <MenuItem value={'Skipped'}>Skipped</MenuItem>
                <MenuItem value={'Finished'}>Finished</MenuItem>
            </Select> :
            <></>
    )
}