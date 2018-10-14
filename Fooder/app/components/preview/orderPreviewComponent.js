import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/preview/orderPreview.css';
import {PreviewRestoran} from './previewRestoran';
import {DeliveryInfoComponent} from './deliveryInfoComponent';
import {DeliveryAccept} from './deliveryAcceptComponent';
import '../../styles/animate.css';
export class OrderPreview extends React.Component 
{
    constructor(props)
    {
        super(props);
        let rests = this.props.order.restorani.filter(item => item.ukupno != 0);
        this.state = {orderState : 0,napomene : [],restorani : rests,ukupno_restorana : rests.length};
        this.getNapomena = this.getNapomena.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.orderRejected = this.orderRejected.bind(this);
        this.handleFinishClicked = this.handleFinishClicked.bind(this);
        this.orderAccepted = this.orderAccepted.bind(this);
    }
    componentDidMount()
    {
        const scrollTo = ReactDOM.findDOMNode(this.refs.scrollHere)
        window.scrollTo(0, scrollTo.offsetTop);
    }
    getNapomena(napomena,index)
    {
        var temp = this.state.napomene;
        temp[index] = napomena;
        this.setState({napomene : temp});
    }
    handleNext()
    {
        this.setState({orderState : this.state.orderState + 1});
    }
    handleBack()
    {
        if(this.state.orderState == 0)
            this.props.closePreview();
        else
            this.setState({orderState : this.state.orderState - 1});
    }
    orderAccepted()
    {
        var ukupno = this.state.ukupno_restorana - 1;
        this.setState({ukupno_restorana: ukupno});
    }
    orderRejected(restoran)
    {
        var ukupno = this.state.ukupno_restorana - 1;
        this.setState({ukupno_restorana: ukupno});
    }
    handleFinishClicked(restoran)
    {
        this.props.finishPreview();
    }
render() 
{ 
    var prikaz = null;
    if(this.state.orderState == 0)
    {
    prikaz =
    <div  className="preview-articles">
    <div className="articles-heading">
        <h2 className="heading-text">Vaša narudžba</h2>
    </div>
    <div className="articles-body">
    
        {    
            this.state.restorani.map((restoran,i) => {
                 return <PreviewRestoran napomena = {this.state.napomene[i]} key={i} ime = {restoran.imeRestorana} cijena = {restoran.ukupno} index = {i} getNapomena = {this.getNapomena}/>
            }
                
            )
        }    
        <div className="previewButtons">
            <button onClick={this.handleBack} className="prev-btn-back">NAZAD</button>
            <button onClick={this.handleNext} className="prev-btn-next">DALJE</button>
        </div>
    </div>
    </div>
    }
    else if(this.state.orderState == 1)
    {
    prikaz = 
    <div className="preview-articles fadeIn">
    <div className="articles-heading">
        <h2 className="heading-text">Informacije za dostavu</h2>
    </div>
    <div className="articles-body">
        <DeliveryInfoComponent />
        <div className="previewButtons">
            <button onClick={this.handleBack} className="prev-btn-back">NAZAD</button>
            <button onClick={this.handleNext} className="prev-btn-next">DALJE</button>
        </div>
    </div>
    </div>
    }
    else if(this.state.orderState == 2)
    {
    prikaz = 
    <div className="preview-articles">
    <div className="articles-heading">
        <h2 className="heading-text">Još malo...</h2>
    </div>
    <div className="articles-body">
    {    
            this.state.restorani.map((restoran,i) => {
                return <DeliveryAccept key={i} orderAccepted = {this.orderAccepted} orderRejected = {this.orderRejected} restoran = {restoran.imeRestorana} cijena = {restoran.ukupno} index={i}/> 
            }
            )
        }
        <div className={this.state.ukupno_restorana == 0 ? "finish-btn-container" : "hider"}>
            <button onClick={this.handleFinishClicked} className="btn-finish">ZATVORI</button>
        </div>  
    </div>
    </div>
    }
    return(
        <div ref="scrollHere" className="order-wrapper">
            {prikaz} 
        </div>
    )
}
} 
 
 
