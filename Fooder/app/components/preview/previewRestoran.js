import React from 'react';
import '../../styles/preview/previewRestoran.css';

export class PreviewRestoran extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {napomena : this.props.napomena}
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event)
    {
        this.setState({napomena:event.target.value});
        this.props.getNapomena(event.target.value,this.props.index);
    }
  
render() 
{ 
    return(
     <div className="prev-restoran">
        <ul className="prev-podaci">
            <li className="prev-label">IME RESTORANA</li>
            <li className="prev-data">{this.props.ime}</li>
            <li className="prev-label">ZA PLATITI</li>
            <li className="prev-data">{this.props.cijena} KN</li>
            <li className="prev-napomena">NAPOMENA UZ NARUDŽBU</li>
        </ul>
        <div className="input-field">
        <textarea className="prev-input" placeholder="Ovdje možete unijeti napomenu uz vašu nardužbu...." onChange={this.handleInputChange} value={this.state.napomena}></textarea>
        </div>
        
     </div>
    )
}
} 
 
 
