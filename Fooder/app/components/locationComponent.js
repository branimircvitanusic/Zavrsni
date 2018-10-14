import React from 'react';
import '../styles/location.css';
import {ListOfCities} from '../data/cities.js';

export class LocationComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { Grad : '',Kvart : '' };
        this.handleCitySelection = this.handleCitySelection.bind(this);
        this.handleKvartSelection = this.handleKvartSelection.bind(this);
        this.createCities = this.createCities.bind(this);
        this.createKvarts = this.createKvarts.bind(this);
    }
    handleCitySelection(event){
       this.setState({Grad : event.target.value,Kvart : ''});
       this.locationChanged(event.target.value,'');
    }
    handleKvartSelection(event){
       this.setState({Kvart : event.target.value});
       this.locationChanged(this.state.Grad,event.target.value);
    }
    locationChanged(grad,kvart){
            this.props.handleLocationSelected(grad,kvart);
    }
    createCities() {
        let  items = [];
        items.push(<option key = "default" className="select-option" value="" disabled  >Odaberite grad</option>);
        ListOfCities.map((city,i) => {
            items.push(<option key = {i} value = {city.ime}>{city.ime}</option>);
        })      
        return items;
    }
    createKvarts(grad)
    {
        let items =  [];
        items.push(<option key = "default" className="select-option" value="" disabled  >Odaberite kvart</option>);
        grad.kvartovi.map((kvart,i) => {
            items.push(<option key = {i} value = {kvart}>{kvart}</option>);
        })      
        return items;
    }
    render()
    {
        var city_selction = null;
        var kvart_selection = null;
        city_selction =
        <select onChange={this.handleCitySelection} value={this.state.Grad}> 
            {
                this.createCities()
            }
        </select>

        if(this.state.Grad === '')
        {
            kvart_selection =
                <select onClick={this.cityNotSelected} value={this.state.Kvart} >
                    <option className="select-option" value="" disabled  >Odaberite kvart</option>
                </select>
        }
        else
        {
            let grad = ListOfCities.find(item => item.ime === this.state.Grad );
            kvart_selection =
            <select onChange={this.handleKvartSelection} value={this.state.Kvart} >
                    {this.createKvarts(grad)}
            </select>
            
        }
        return(
           
            <div className="location">
                {city_selction}
            <div className="separator"></div>
                {kvart_selection}
            </div>
           
           
        );
    }

}

