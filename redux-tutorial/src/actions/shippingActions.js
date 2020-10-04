export const ADD_SHIPPING = "ADD_SHIPPING";
export const SUBTRACT_SHIPPING = "SUBTRACT_SHIPPING";

export const addShipping = () => {
    return {
        type: ADD_SHIPPING,
    }
}

export const subtractShipping = () => {
    return {
        type: SUBTRACT_SHIPPING,
    }
}