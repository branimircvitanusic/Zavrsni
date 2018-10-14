import React from 'react';
import '../../styles/main/mainblank.css';

export class BlankComponent extends React.Component{
    render()
    {
        return(
        <div className="main_blank">
            <h4 className="main_blank_message">Molimo odaberite grad i kvart 
            kako bi mogli prikazati koji restorani su dostupni za narudžbu! </h4>
        </div>
        );
    }

}

