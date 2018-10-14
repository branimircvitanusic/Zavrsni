import React from 'react';
import '../styles/cart.css';
import '../styles/style.css';
import {CartMealAddingComponent} from './cartMealAddingComponent';


export class CartMealComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.addingDelete = this.addingDelete.bind(this);
        this.handleMealDelete = this.handleMealDelete.bind(this);
    }
   
    addingDelete(dodatak)
    {
        this.props.addingDelete(this.props.jelo,dodatak);
    }
    handleMealDelete()
    {
        this.props.mealDelete(this.props.jelo);
    }
    render(){
        var dodaci = this.props.jelo.dodaci;
        var ListOfAddings = 
        dodaci.map( (dodatak, i) => 
            <CartMealAddingComponent key = {i} dodatak =  {dodatak} addingDelete = {this.addingDelete} /> 
        )
    return(
       <div className="meal bounceIn">
            <ul className="cart-item">
            <li className="cart-item-kol">{this.props.jelo.amount}</li>
            <li className="cart-x">x</li>
            <li className="cart-item-name">{this.props.jelo.name}</li>
            <li className="cart-item-price">{this.props.jelo.price} kn</li>
            <li onClick = {this.handleMealDelete} className="cart-item-remove"><i className="fa fa-remove"></i></li>
            </ul>
            {ListOfAddings}
        </div>
        )
    }
}