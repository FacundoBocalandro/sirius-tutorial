import { connect } from 'react-redux'
import Recipe from "../components/Recipe";
import {addShipping, subtractShipping} from "../actions/shippingActions";

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: () => {dispatch(addShipping())},
        subtractShipping: () => {dispatch(subtractShipping())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)