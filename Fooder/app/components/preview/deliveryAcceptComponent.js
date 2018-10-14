import React from 'react';
import '../../styles/preview/accept.css';
import '../../styles/animate.css';
import {Success} from '../preview/successComponent';
import {Reject} from '../preview/rejectComponent';
import ReactDOM from 'react-dom';
export class DeliveryAccept extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            deliveryTime : 0,
            answered : false,
            deliveryAccepted : false,
            visible : true
         };
         this.handleReject = this.handleReject.bind(this);
         this.handleAccept = this.handleAccept.bind(this);
         this.handleFinishClicked = this.handleFinishClicked.bind(this);
         this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    }
    randomIntFromInterval(min,max)
    {
    return Math.floor(Math.random()*(max-min+1)+min);
    }
    componentDidMount()
    {
        var delTime = this.randomIntFromInterval(15,120);
        var waitTime = this.randomIntFromInterval(1,5) * 1000;
        this.interval = setInterval( () => { 
            if(this.state.deliveryTime == 0)
            {
            this.setState({
                 deliveryTime: delTime,
                 answered:true,
                 deliveryAccepted :false,
                 deliveryRejected : false
             })
            }
        }, waitTime);
    }
    componentWillUnmount()
    {
        clearInterval(this.interval);
    }
    handleReject()
    {
        this.props.orderRejected(this.props.restoran);
        this.setState({deliveryRejected : true});
    }
    handleAccept()
    {
        this.props.orderAccepted(this.props.restoran);
        this.setState({deliveryAccepted : true});
    }
    handleFinishClicked()
    {   
       this.props.handleFinishClicked(this.props.restoran);
    }
  
    render() { 
        return (  
            <div className="accept-container fadeIn">
                <div className="accept-restoran">{this.props.restoran}</div>
                <div className={this.state.answered ? "hider": "accept-loading" }>
                    <div className="loading-message">
                        <p>
                            Čekanje na povratnu informaciju o vremenu dostave restorana....
                        </p>
                    </div>
                    <div className="loading-circle">
                        <div className = "loader"></div>
                    </div>
                </div>
                    <div className={this.state.answered && !this.state.deliveryAccepted && !this.state.deliveryRejected ? "response" : "hider"} >
                        <div className="response-message"><p>Očekivano vrijeme dostave je</p><br /></div>
                        <div className="delivery-time bounceIn"><p>{this.state.deliveryTime} min</p></div>
                        <div className ="accept-buttons">
                        <button className="accept-btn-reject" onClick={this.handleReject}>ODBIJ</button>
                        <button className="accept-btn-accept" onClick={this.handleAccept}>PRIHVATI</button>
                        </div>
                    </div>
                <div className={this.state.deliveryAccepted || this.state.deliveryRejected ? "hider":"accept-napomena"}>
                   <p> Narudžba je uspješno obavljena tek nakon što prihvatite vrijeme dostave! </p>
                </div>
                <div className={this.state.deliveryAccepted  ? "thanks":"hider"}>
                    <Success />
                   <p> Hvala, narudžba je uspješno obavljena. </p>
                </div>
                <div className={this.state.deliveryRejected ? "thanks":"hider"}>
                    <Reject />
                   <p> Narudžba je odbijena. </p>
                </div>

            </div>
        )
    }
}
 
