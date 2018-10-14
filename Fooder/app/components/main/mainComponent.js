import React from 'react';
import {RestoranComponent} from './restoranComponent';
import {BlankComponent} from './blankComponent';
import {MealComponent} from './mealComponent';
import {MealAddingComponent} from './mealAddingComponent';
import {ListOfMeals} from '../../data/meals';
import {ListOfRest} from '../../data/restaurants';
import '../../styles/main/mainComponent.css';



export class MainComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {main_state : 0 , clicked_meal : '',clicked_price : '',clicked_category : '',clicked_addings : ''};
        
        this.handleSelection = this.handleSelection.bind(this);
        this.handleMealClicked = this.handleMealClicked.bind(this);
        this.cancelClicked = this.cancelClicked.bind(this);
        this.handleAddings = this.handleAddings.bind(this);
        this.showComments = this.showComments.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
            this.setState({main_state:nextProps.app_state});
    }
    handleSelection(selectedRest)
    {
       this.setState({main_state : 2});
       this.props.handleRestoranSelected(selectedRest);
    }
    showComments(restoran)
    {
        this.props.handleShowComments(restoran);
    }
    handleMealClicked(clickedMeal,clickedAddings,clickedPrice,clickedCategory)
    {
        this.setState({main_state : 3,clicked_meal : clickedMeal,clicked_addings : clickedAddings,clicked_price : clickedPrice,clicked_category : clickedCategory});
        
    }
    cancelClicked()
    {
        this.setState({main_state : 2});
    }
    handleAddings(meal)
    {
        var temp = Object.assign({},meal,{name:this.state.clicked_meal},{price_basic:this.state.clicked_price});
        this.props.getMeal(temp);
        this.setState({main_state : 2});
        
    }
    render()
    {
        let active = null;
        if(this.props.app_state == 0)
        {
            active = <BlankComponent />

        }
        else if(this.state.main_state == 1)
        {
            active =
             <div className="main-interact">
                {ListOfRest.map( (item, i) => 
                    <RestoranComponent handleSelection = {this.handleSelection} showComments = {this.showComments} key={i} name = { item.ime } 
                    img={item.slika} comm={item.komentari} rate={item.ocjena}  /> 
                    )}
            </div>
        }
        else if(this.state.main_state == 2 )
        {
            active =
             <div className="main-interact-meal">
                {ListOfMeals.map( (item, i) => 
                    <MealComponent handleMealClicked = {this.handleMealClicked} key={i} name = { item.name } 
                    image={item.image} addings = { item.addings } price={item.price} category = {item.category} /> 
                    )}
            </div>
        }
        else if(this.state.main_state == 3)
        {
            active =
             <div className="meal-adding-selection fadeIn">
                <MealAddingComponent mealName = {this.state.clicked_meal} mealAddings = {this.state.clicked_addings} 
                mealPrice = {this.state.clicked_price} mealCategory={this.state.clicked_category} cancelClicked = {this.cancelClicked} 
                handleAddings = {this.handleAddings}
                 />
            </div>
        }
        return(
            <div className={this.state.main_state == 0 ? "interact-area-blank" : "interact-area"}>
                { active }
            </div>
        );
    }

}

