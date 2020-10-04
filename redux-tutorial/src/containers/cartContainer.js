import {connect} from "react-redux";
import cart from "../components/cart";
import {addQuantity, removeItem, subtractQuantity} from "../actions/cartActions";


const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        items: state.items,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)