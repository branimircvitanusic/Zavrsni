import React from 'react';
import '../styles/selected-restoran.css';
import '../styles/animate.css'
export class ChangeRestoran extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleShowRests = this.handleShowRests.bind(this);
    }
    handleShowRests()
    {
        this.props.showRests();
    }
    render()
    {
        return (
            <div className="selected-restoran">  
                    <span onClick ={this.handleShowRests} className="selectedRest"><i className="fa fa-angle-left"></i>POVRATAK NA LISTU RESTORANA</span>
            </div>
        )
    }
}