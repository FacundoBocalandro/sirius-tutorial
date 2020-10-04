import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import {ADD_QUANTITY, REMOVE_ITEM, SUBTRACT_QUANTITY} from "../actions/cartActions";
import {ADD_SHIPPING, SUBTRACT_SHIPPING} from "../actions/shippingActions";


const initState = {
    items: {
        1: {title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        2: {title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        3: {title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        4: {title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        5: {title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        6: {title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    },
    addedItems:{},
    total: 0,
}
const cartReducer= (state = initState,action)=>{
    switch (action.type) {
        case REMOVE_ITEM:
            const newTotal = state.total - (state.items[action.id].price * state.addedItems[action.id].quantity);
            const new_items = {...state.addedItems};
            delete new_items[action.id];
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
            }
        case ADD_QUANTITY:
            const quantity = state.addedItems[action.id] ? state.addedItems[action.id].quantity + 1 : 1;
            const newTotal1 = state.total + state.items[action.id].price;
            return {
                ...state,
                addedItems: {...state.addedItems, [action.id]: {quantity}},
                total: newTotal1,
            }
        case SUBTRACT_QUANTITY:
            const quantitySubtracted = state.addedItems[action.id].quantity - 1;
            const newTotal2 = state.total - state.items[action.id].price;
            if (quantitySubtracted <= 0){
                const new_items = {...state.addedItems};
                delete new_items[action.id];
                return{
                    ...state,
                    addedItems: new_items,
                    total: newTotal2,
                }
            } else {
                return {
                    ...state,
                    addedItems: {...state.addedItems, [action.id]: {quantity: quantitySubtracted}},
                    total: newTotal2,
                }
            }
        case ADD_SHIPPING:
            return {
                ...state,
                total: state.total + 6,
            }
        case SUBTRACT_SHIPPING:
            return {
                ...state,
                total: state.total - 6,
            }
        default:
            return state;
    }

}
export default cartReducer;