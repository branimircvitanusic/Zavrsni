import React from 'react';
import '../../styles/restoran/comments.css';
import {ListOfComments} from '../../data/comments.js';

export class CommentPreviewComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.getStars = this.getStars.bind(this);
    }
    getStars(rate)
    {
        let fulls = Math.floor(rate);
        let empties = 0,halfs = 0;
        if(rate - Math.floor(rate) >= 0.5)
        {
            halfs = 1;
            empties = 4 - fulls;
        }
        else
            empties = 5 - fulls;
       
        let x = [];
        for(let i=0;i<fulls;i++)
        {
            x.push( <i key = {i} className="fa fa-star r-i-comm-star"></i>);
        }
        for(let i = 5;i<halfs+5;i++)
        {
            x.push( <i key = {i} className="fa fa-star-half-o r-i-comm-star"></i>);
        }
        for(let i = 10;i<empties+10;i++)
        {
            x.push( <i key = {i} className="fa fa-star-o r-i-comm-star"></i>);
        }
        
        return x;
    }
    render()
    {
        var comments=
        ListOfComments.map((item,i) => 
            <div key= {i} className="r-i-comment">
                    <span className="r-i-comment-name">{item.author}</span>
                    <span className="r-i-comment-rate">{this.getStars(item.comment_rate)}{" "}{item.comment_rate}</span>
                    <span className="r-i-comment-value">"{item.comment_value}"</span>
                </div>
        )
        return(
            <div className="r-i-comments-container">
                {comments}
            </div>
        );
    }    


}