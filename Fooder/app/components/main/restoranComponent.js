import React from 'react';
import '../../styles/main/restoran.css';
import '../../styles/style.css';
import '../../styles/animate.css';

export class RestoranComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {selected : false}
        this.handleClickEvent = this.handleClickEvent.bind(this);
        this.getStars = this.getStars.bind(this);
        this.handleCommentsClicked = this.handleCommentsClicked.bind(this);
    }
    handleCommentsClicked()
    {
        this.props.showComments(this.props.name);
    }
    handleClickEvent()
    {
        this.props.handleSelection(this.props.name);
    }
    getStars()
    {
        let fulls = Math.floor(this.props.rate);
        let empties = 0,halfs = 0;
        if(this.props.rate - Math.floor(this.props.rate) >= 0.5)
        {
            halfs = 1;
            empties = 4 - fulls;
        }
        else
            empties = 5 - fulls;
       
        let x = [];
        for(let i=0;i<fulls;i++)
        {
            x.push( <i key = {i} className="fa fa-star "></i>);
        }
        for(let i = 5;i<halfs+5;i++)
        {
            x.push( <i key = {i}className="fa fa-star-half-o "></i>);
        }
        for(let i = 10;i<empties+10;i++)
        {
            x.push( <i key = {i} className="fa fa-star-o "></i>);
        }
        
        return x;
    }
        
    render()
    {
        return(
        <div   className="restoran fadeIn">
            <div onClick = {this.handleClickEvent}  className="restoran-img"><img className="restoran-image" height="100%" width="100%" src={this.props.img} /></div>
            <div onClick = {this.handleClickEvent} className="restoran-name"><h5>{this.props.name}</h5></div>
            <div onClick = {this.handleCommentsClicked} className="restoran-com"><i className="fa fa-comment"></i><span className="rate-number">{this.props.comm}</span>
            </div>
            <div className="restoran-rate" >
                {this.getStars()}
            <span className="rate-number">{this.props.rate}</span>
            </div>
        </div>
        
        );
    }
}




