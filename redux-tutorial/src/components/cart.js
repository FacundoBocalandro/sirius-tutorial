import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Recipe from "../containers/RecipeContainer";

export default class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to subtract from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

        let addedItems = Object.keys(this.props.addedItems).length ?
            (
                Object.entries(this.props.addedItems).map(item => {
                    const items = this.props.items;
                    return(
                        <li className="collection-item avatar" key={item[0]}>
                            <div className="item-img">
                                <img src={items[item[0]].img} alt={items[item[0]].img} className=""/>
                            </div>

                            <div className="item-desc">
                                <span className="title">{items[item[0]].title}</span>
                                <p>{items[item[0]].desc}</p>
                                <p><b>Price: {items[item[0]].price}$</b></p>
                                <p>
                                    <b>Quantity: {item[1].quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><ArrowDropUpIcon onClick={()=>{this.handleAddQuantity(item[0])}}/></Link>
                                    <Link to="/cart"><ArrowDropDownIcon onClick={()=>{this.handleSubtractQuantity(item[0])}}/></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item[0])}}>Remove</button>
                            </div>
                        </li>
                    )
                })
            )
            :
            (
                <p>Nothing.</p>
            )
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    {Object.keys(this.props.addedItems).length?
                        <Recipe/>
                        :
                        <></>
                    }
                </div>
            </div>
        )
    }
}
