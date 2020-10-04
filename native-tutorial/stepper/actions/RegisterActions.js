export const SET_FIRST_STEP = "SET_FIRST_STEP";
export const CHECK_FIRST_STEP = "CHECK_FIRST_STEP";

export const setFirstStep = (firstStep) => ({type: SET_FIRST_STEP, payload: firstStep});
export const checkFirstStepValidity = (firstStep) => ({type: CHECK_FIRST_STEP, payload: firstStep})
