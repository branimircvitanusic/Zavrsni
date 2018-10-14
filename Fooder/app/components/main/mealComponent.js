import React from 'react';
import '../../styles/main/mealComponent.css';
import '../../styles/animate.css';

export class MealComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
    handleClickEvent()
    {
        this.props.handleMealClicked(this.props.name,this.props.addings,this.props.price,this.props.category);
    }
    
    render()
    {
        return(
        <div onClick = {this.handleClickEvent} className="select-meal fadeIn">
            <div className="name-price">
            <span className="select-meal-name">{this.props.name}</span>
            <span className="select-meal-price">{this.props.price} KN</span>
            </div>
            <span className="p-addings">{this.props.addings}</span>
            
        </div>
        );
    }

}

