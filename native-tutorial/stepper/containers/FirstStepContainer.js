import React from 'react';
import {connect} from "react-redux";
import {setFirstStep} from "../actions/RegisterActions";
import FirstStep from "../components/first-step/FirstStep";


const mapStateToProps = state => ({
    firstStep: state.registerReducer.firstStep,
})

const mapDispatchToProps = dispatch => {
    return {
        setFirstStep: firstStep => {
            dispatch(setFirstStep(firstStep))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FirstStep);
