import React from 'react';
import '../../styles/preview/delivery.css';
import '../../styles/animate.css';

export class DeliveryInfoComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {ime : '',prezime :'',adresa :'',kontakt :''};
        this.imeChange = this.imeChange.bind(this);
        this.prezimeChange = this.prezimeChange.bind(this);
        this.adresaChange = this.adresaChange.bind(this);
        this.kontaktChange = this.kontaktChange.bind(this);
    }
  
    imeChange(event)
    {
        this.setState({ime : event.target.value});
    }
    prezimeChange(event)
    {
        this.setState({prezime : event.target.value});
    }
    adresaChange(event)
    {
        this.setState({adresa : event.target.value});
    }
    kontaktChange(event)
    {
        this.setState({kontakt : event.target.value});
    }
   
render() 
{
    return(
        <div ref="del-scroll" className="del-container fadeIn">
            <ul className="del-list">
                <li className="del-label">IME</li>
                <li className="del-input"><input type="text" placeholder="Vaše ime" onChange={this.imeChange} value={this.state.ime}/></li>
                <li className="del-label">PREZIME</li>
                <li className="del-input"><input type="text" placeholder="Vaše prezime" onChange={this.prezimeChange} value={this.state.prezime}/></li>
                <li className="del-label">ADRESA</li>
                <li className="del-input"><input type="text" placeholder="Vaša adresa" onChange={this.adresaChange} value={this.state.adresa}/></li>
                <li className="del-label">KONTAKT</li>
                <li className="del-input"><input type="text" placeholder="Broj mobitela" onChange={this.kontaktChange} value={this.state.kontakt}/></li>
            </ul>
        </div>
    )
}
}

