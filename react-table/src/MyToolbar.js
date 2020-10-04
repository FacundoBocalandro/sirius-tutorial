import React from "react";
import {MTableToolbar} from "material-table";
import Button from "@material-ui/core/Button";
import {toolbarButtonColor} from "./Utils";

export const MyToolbar = (props, filter) => (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{marginRight: 'auto'}}>
            <MTableToolbar {...props} />
        </div>
        <div style={{alignSelf: 'center', marginRight: '1vw'}}>
            {['TODO', 'IN PROGRESS', 'SKIPPED', 'FINISHED', 'ALL'].map(text => {
                return <Button variant={"outlined"}
                               style={{color: toolbarButtonColor, borderColor: toolbarButtonColor}}
                               onClick={() => filter(text)}>{text}</Button>
            })}
        </div>
    </div>
)