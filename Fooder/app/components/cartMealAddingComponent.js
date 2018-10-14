import React from 'react';
import '../styles/cart.css';
import '../styles/style.css';

export class CartMealAddingComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteAdding = this.handleDeleteAdding.bind(this);
    }
    handleDeleteAdding()
    {
        this.props.addingDelete(this.props.dodatak);
    }
    render(){
    
    return(
    
            <ul className="cart-item-addings">
                <li className="cart-item-adding-name">+ {this.props.dodatak.ime}</li>
                <li className="cart-item-adding-price">{this.props.dodatak.cijena} kn</li>
                <li onClick = {this.handleDeleteAdding}className="cart-item-adding-remove"><i className="fa fa-remove"></i></li>
            </ul>
       
        );
    }
}