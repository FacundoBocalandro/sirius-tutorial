import {connect} from 'react-redux';
import Home from "../components/home";
import {addQuantity} from "../actions/cartActions";

const mapStateToProps = (state)=>{
    return {
        items: state.items,
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
