import React from 'react';
import Stepper from "./containers/StepperContainer";
import {Provider} from 'react-redux';
import configureStore from "./Store";

export default function App(){
    return(
        <Provider store={configureStore()}>
            <Stepper/>
        </Provider>
    )
}
