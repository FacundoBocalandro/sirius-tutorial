import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";

class Home extends React.Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = Object.entries(this.props.items).map((item) => {
            return (
                <Grid item md={4} key={item[0]}>
                    <div className="card" >
                        <div className="card-image">
                            <img src={item[1].img} alt={item[1].title}/>
                            <span className="card-title" style={{color: 'black'}}>{item[1].title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                                  style={{textAlign: 'center', verticalAlign: 'middle',
                                        backgroundPosition: 'center', transition: 'background 0.8s'}}>
                                <AddIcon
                                fontSize={"large"} onClick={()=>{this.handleClick(item[0])}}/></span>
                        </div>
                        <div className="card-content">
                            <p>{item[1].desc}</p>
                            <p><b>Price: {item[1].price}$</b></p>
                        </div>
                    </div>
                </Grid>
            )
        });
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <Grid container spacing={2}>
                    {itemList}
                </Grid>
            </div>
        )
    }

}


export default Home;