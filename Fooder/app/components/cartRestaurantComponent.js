import React from 'react';
import {CartMealComponent} from './cartMealComponent';
import '../styles/style.css';

export class CartRestaurant  extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={restDelete : false};
        this.mealDelete = this.mealDelete.bind(this);
        this.addingDelete = this.addingDelete.bind(this);
        this.handleRestDelete = this.handleRestDelete.bind(this);
    }
    handleRestDelete()
    {
        this.props.restDelete(this.props.imeRestorana);
        this.setState({restDelete : true});
    }
    mealDelete(jelo)
    {
        this.props.mealDelete(this.props.imeRestorana,jelo);
    }
    addingDelete(jelo,dodatak)
    {
        this.props.addingDelete(this.props.imeRestorana,jelo,dodatak);
    }
    
    render() { 
        var jela = this.props.jela;
        var ListOfMeals = 
        jela.map( (jelo, i) => 
            <CartMealComponent key = {i} jelo =  {jelo} mealDelete={this.mealDelete} addingDelete = {this.addingDelete}/> 
        )
        return (  
            <div className="cart-rest bounceIn">
                <div className="cart">
                <ul className="cart-selected-rest">
                    <li className="cart-rest-name">{this.props.imeRestorana}</li>
                    <li className="cart-rest-remove" onClick={this.handleRestDelete}><i className="fa fa-remove"></i></li>
                </ul>
                {ListOfMeals}
            </div>
            <hr className="cart-item-separator" />
            <ul className="cart-sum">
                <li>UKUPNO</li>
                <li className="cart-sum-value">{this.props.ukupno} kn</li>
            </ul>
        </div> 
        )
    }
}
 