import React from 'react';
import '../../styles/restoran/restoranInfo.css';
import {ListOfRest} from '../../data/restaurants.js';
import {CommentPreviewComponent} from './commentPreviewComponent';
export class RestoranInfoComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        let restoran = ListOfRest.filter(item => item.ime === props.restoran);
        this.state = { rest : restoran};
        this.handleClose = this.handleClose.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleClose()
    {
        this.props.handleCloseRestInfo();
    }
    handleSelect()
    {
       this.props.handleRestoranSelected(this.props.restoran);
    }
    getStars()
    {
        let fulls = Math.floor(this.state.rest[0].ocjena);
        let empties = 0,halfs = 0;
        if(this.state.rest[0].ocjena - Math.floor(this.state.rest[0].ocjena) >= 0.5)
        {
            halfs = 1;
            empties = 4 - fulls;
        }
        else
            empties = 5 - fulls;
       
        let x = [];
        for(let i=0;i<fulls;i++)
        {
            x.push( <i key = {i} className="fa fa-star r-i-star"></i>);
        }
        for(let i = 5;i<halfs+5;i++)
        {
            x.push( <i key = {i} className="fa fa-star-half-o r-i-star"></i>);
        }
        for(let i = 10;i<empties+10;i++)
        {
            x.push( <i key = {i} className="fa fa-star-o r-i-star"></i>);
        }
        
        return x;
    }
    render()
    {
        return(
            <div className="r-i-wrapper">
                <div className="r-i" >
                    <div className="r-i-image"> <img className="r-i-img" src={this.state.rest[0].slika}/> </div>
                    
                    <div className= "r-i-name"> {this.state.rest[0].ime}</div>

                    <div className = "r-i-rate">
                        {this.getStars()}
                        <span className="r-i-rate-number">{this.state.rest[0].ocjena}</span>   
                    </div>

                    <div className = "r-i-comment-box">
                        <h4 className="r-i-comm-heading">KOMENTARI:</h4>
                        <hr className="r-i-hr"/>
                        <CommentPreviewComponent />
                        <hr className="r-i-hr"/>
                    </div>                    

                    <div className="r-i-buttons"> 
                        <button onClick={this.handleClose} className="r-i-btn-close">ZATVORI</button>
                        <button onClick={this.handleSelect} className="r-i-btn-select">ODABERI</button>
                    </div>

                </div>
            </div>
        );
    }
}