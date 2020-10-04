import {SET_FIRST_STEP} from "../actions/RegisterActions";

const initialState = {
    firstStep: {
        email: '',
        username: '',
        password: '',
        repeat: '',
        isValid: false,
        error: {
            hasError: false,
        },
    }
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRST_STEP:
            return {
                ...state,
                firstStep: action.payload,
            }
        default:
            return state;
    }
}

export default registerReducer;
