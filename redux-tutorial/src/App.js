import React from 'react';
import NavBar from "./components/navBar";
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/css/material-icons.min.css';
import Home from './containers/homeContainer';
import Cart from "./containers/cartContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/cart" ><Cart/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
            </Router>
        )
    }

}