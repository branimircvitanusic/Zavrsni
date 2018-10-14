import React from 'react';
import '../styles/style.css';
import '../styles/animate.css';

var ListOfStates=[
     "","1. Odabir lokacije","2. Odabir restorana","3. Odabir hrane"
  ];
export class StateComponent extends React.Component{
    render()
    {
        return(
            <ul className={this.props.stanje != 2 ? "" : "rest-showed"}>
                <li className={this.props.stanje != 2 ? "previous-state" : "hider"}>{ListOfStates[this.props.stanje]}</li>
                <li className="active-state">{this.props.stanje != 2 ? ListOfStates[this.props.stanje + 1] : this.props.restoran} </li>
                <li className={this.props.stanje != 2 ? "next-state" : "hider"}>{ListOfStates[this.props.stanje + 2]}</li>
            </ul>
    
        );
    }

}

