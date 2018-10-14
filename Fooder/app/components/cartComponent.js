import React from 'react';
import '../styles/cart.css';
import {CartMealComponent} from './cartMealComponent';
import { CartRestaurant } from './cartRestaurantComponent';

export class CartComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = 
        {
        restorani : []
        };
        this.mealDelete = this.mealDelete.bind(this);
        this.addingDelete = this.addingDelete.bind(this);
        this.restDelete = this.restDelete.bind(this);
        this.cartBack = this.cartBack.bind(this);
        this.cartFinish = this.cartFinish.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.selectedRest !== "")
        {
            var f = 0;
            var temp = this.state.restorani;
            temp.forEach((element,i) => {
                    if(element.imeRestorana === nextProps.selectedRest)
                      { 
                        if(nextProps.selectedMeal !== null)
                            {
                            element.jela.push(nextProps.selectedMeal);
                            element.ukupno += parseInt(nextProps.selectedMeal.price);
                            }
                        f = 1;
                      }
                });
            if(f== 0)
            {
            var Restoran = Object.assign({},{imeRestorana : nextProps.selectedRest},{jela : []},{ukupno : 0});
            temp.push(Restoran);
            }
            this.setState({restorani : temp});
           
        }
        if(nextProps.clearCart == true)
        {
            this.setState({restorani : []});
        }
    }
    restDelete(restoran)
    {
        let price = 0;
        var temp = this.state.restorani.filter(
            item => {
                if(item.imeRestorana !== restoran)
                    return item;
                else
                    price = item.ukupno;
            }   
        );
        this.props.priceChange(price,true);
        this.setState({restorani : temp});
        
        if(this.props.selectedRest == restoran)
            this.props.forceRestSelect();
    }
    mealDelete(restoran,jelo){
        var temp = this.state.restorani;
        this.state.restorani.forEach((rest,r) => {
            if(rest.imeRestorana === restoran)
            {
                var meals = rest.jela.filter(item => item !== jelo);
                temp[r].jela = meals;
                temp[r].ukupno -= jelo.price;
            }
        });
        this.props.priceChange(jelo.price,false);
        this.setState({restorani : temp});
    }
    addingDelete(restoran,jelo,dodatak){
        var temp = this.state.restorani;
        let price = 0;
        this.state.restorani.forEach((rest,r) => {
            if(rest.imeRestorana === restoran)
            {
                rest.jela.forEach((meal,m) => {
                   if(meal === jelo)
                   {
                       var extras = meal.dodaci.filter(item => item !== dodatak);
                       temp[r].jela[m].dodaci = extras;
                       temp[r].jela[m].price -= temp[r].jela[m].amount * dodatak.cijena;
                       temp[r].ukupno -= temp[r].jela[m].amount * dodatak.cijena;
                       price = temp[r].jela[m].amount * dodatak.cijena;
                   }     
                });
            }
        });
        this.props.priceChange(price,false);
        this.setState({restorani : temp});
        
    }
    cartBack(){
        this.props.cartBack();
    }
    cartFinish(){
        this.props.getFinalOrder(this.state);
    }
    render()
    { 
        
        var active = null;
        var order_flag = false;
        
            active = 
                    this.state.restorani.map( (restoran, i) => {

                        if(restoran.jela.length > 0)
                        {
                        order_flag = true;
                        return <CartRestaurant key = {i} ukupno = {restoran.ukupno} imeRestorana = {restoran.imeRestorana} jela = {restoran.jela} 
                        mealDelete = {this.mealDelete} addingDelete = {this.addingDelete} restDelete = {this.restDelete}/>
                        }
                    }
                    )
        if(!order_flag)
        active = <p className="empty-basket">Vaša košarica je prazna! </p>
        return(
            <div className="basket"> 
                <h1 className="basket-heading">VAŠA NARUDŽBA</h1> 
                <hr /> 
                {active}
                <div className={this.state.restorani.length == 0 ? "cart-buttons btn-center" : "cart-buttons"}>
                <button className={this.props.showCart ? "adding-btn-cancel" : "hider"} onClick={this.cartBack}>Natrag</button>
                <button onClick = {this.cartFinish} className={order_flag ? "adding-btn-add" : "hider"}>Naruči</button>
                </div>
            </div>
        );
    }
}