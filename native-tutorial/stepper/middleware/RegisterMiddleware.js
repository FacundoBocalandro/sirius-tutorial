import {CHECK_FIRST_STEP, setFirstStep} from "../actions/RegisterActions";
import {validateEmail} from '../components/first-step/utils';

const registerMiddleware = store => next => action => {
    switch (action.type) {
        case CHECK_FIRST_STEP:
            const checkEmail = validateEmail(action.payload.email);
            const checkUsername = action.payload.username.length >= 4;
            const checkPassLength = action.payload.password.length >=4;
            const checkEquals = action.payload.repeat === action.payload.password;
            let firstStep = {}
            if (checkEmail && checkUsername && checkEquals) {
                firstStep = {
                    ...action.payload,
                    isValid: true,
                    error:
                        {
                            hasError: false,
                        },
                };
            } else {
                firstStep = {
                    ...action.payload,
                    isValid: false,
                    error: {
                        hasError: true,
                        emailError: !checkEmail,
                        usernameError: !checkUsername,
                        passwordLength: !checkPassLength,
                        passwordEquals: !checkEquals,
                    },
                };
            }
            store.dispatch(setFirstStep(firstStep));
            break;
        default:
    }
    next(action);
}

export default registerMiddleware;
