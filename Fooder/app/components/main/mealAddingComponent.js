import React from 'react';
import '../../styles/main/mealAdding.css';
import '../../styles/style.css';
import {Checkbox} from './checkboxComponent';
import {ListOfAddings} from '../../data/addings';
import '../../styles/animate.css';
export class MealAddingComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { 
            price : 0 , 
            amount : 1 ,
            dodaci : []
        };
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleAddingPlus=this.handleAddingPlus.bind(this);
        this.handleAddingMinus=this.handleAddingMinus.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleAddClicked = this.handleAddClicked.bind(this);
    }
    componentWillMount() {
        this.setState({price : this.props.mealPrice});
      }
    
      handleCancelClick()
      {
            this.props.cancelClicked();
      }

      handleAmountChange(event)
      {
        var x = parseInt(event.target.value);
        var trenutno = parseInt(this.state.price);
        this.setState({amount: x ,price: trenutno / this.state.amount * x },this.handleUpdate);
      }
      handleUpdate()
      {
          
      }
      handleAddingMinus(name,price)
      {
            var trenutno = this.state.price;
            var temp = this.state.dodaci.filter(item => item.ime !== name );
            this.setState({
                price : parseInt(trenutno) - this.state.amount * parseInt(price),
                dodaci : temp
            });
            
      }
      handleAddingPlus(name,price)
      {
        var trenutno = this.state.price;
        var temp = this.state.dodaci;
        temp.push({ime:name,cijena:price});
        this.setState({
            price : parseInt(trenutno) + this.state.amount * parseInt(price),
            dodaci : temp,
        });
      }
      handleAddClicked()
      {
         this.props.handleAddings(this.state);
      }

    render()
    {
        var dodaci = this.props.mealAddings;
        var included = [];
        var excluded = [];
        var i=0,j=0;
        ListOfAddings.forEach(item => {
            if(dodaci.search(item.addName) != -1)
            {
                included[i] = item;
                i++;
            }
            else
            {
                excluded[j] = item;
                j++;
            }
        });
    
        return(
        <div>
            <div className="adding-meal-name" >
            <span>Ovdje birate željene dodatke na jelo  <br />({this.props.mealCategory} - {this.props.mealName} )</span>
            </div>
            <hr />
            <div className="adding-interact">
                <form className="adding-form">
                {
                    included.map( (item, i) => 
                    <Checkbox
                        isDisabled = "true"
                        label = {item.addName}
                        price = {item.addPrice}
                        key = {item.addName}
                    />)
                    

                }
                {
                excluded.map( (item, i) => 
                    <Checkbox
                        isDisabled = "false"
                        label = {item.addName}
                        price = {item.addPrice}
                        handleAddingPlus = {this.handleAddingPlus}
                        handleAddingMinus = {this.handleAddingMinus}
                        key = {item.addName}
                    />
                )
                }
                </form>
            </div>
            <hr />
            <div className="adding-numbers">
                <div className="adding-amount"> 
                    <span>Količina :
                    <select className="amount-select" onChange = {this.handleAmountChange} value={this.state.amount}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </span>
                </div>
                <div className="adding-price pulse"> 
                    <span >Cijena : {this.state.price} KN</span>
                </div>
            </div>
            <div className="adding-buttons">
                <button onClick={this.handleCancelClick} className="adding-btn-cancel">Odustani</button>
                <button className="adding-btn-add" onClick={this.handleAddClicked} >Dodaj</button>
            </div>
        </div>
        );
    }

}



