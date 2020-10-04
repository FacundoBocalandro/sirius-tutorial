import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from "@material-ui/icons";


const NavBar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>

                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/cart"><ShoppingCart/></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;