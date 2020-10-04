import React from 'react';
import {connect} from "react-redux";
import {checkFirstStepValidity} from "../actions/RegisterActions";
import Stepper from "../components/stepper";


const mapStateToProps = state => ({
    firstStep: state.registerReducer.firstStep,
})

const mapDispatchToProps = dispatch => {
    return {
        checkFirstStepValidity: firstStep => {
            dispatch(checkFirstStepValidity(firstStep))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
