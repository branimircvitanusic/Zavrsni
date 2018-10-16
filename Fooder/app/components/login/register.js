import React,{Component} from 'react';
var validator = require("email-validator");
import {InfoModal} from '../info/infoModal.js'

export class Register extends Component{
    constructor(props)
    {
        super(props);
        this.state = {firstName : '',lastName : '',email : '', password : '',passwordRepeat : '',phone : '',adress : '',emailValid : true,passValid : true,passwordsMatch : true,showInfo : false, infoMessage : ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAdressChange = this.handleAdressChange.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
    }
    handleNameChange(event)
    {
        this.setState({firstName:event.target.value});
    }
    handleLastNameChange(event)
    {
        this.setState({lastName:event.target.value});
    }
    handlePhoneChange(event)
    {
        this.setState({phone:event.target.value});
    }
    handleAdressChange(event)
    {
        this.setState({adress:event.target.value});
    }
    handleEmailChange(event)
    {
        var isEmailValid = validator.validate(event.target.value) 
        this.setState({email:event.target.value, emailValid : isEmailValid});
    }
    handlePasswordChange(event)
    {
        var isPassValid ; 
        if(event.target.value.length >= 6)
        {
            isPassValid = true;
        }
        else
        {
            isPassValid = false;
        }
        this.setState({password:event.target.value, passValid : isPassValid});    
    }
    handlePasswordRepeatChange(event)
    {
        //check if this password is same as password
        //if not let user know
        this.setState({passwordRepeat:event.target.value, passwordsMatch : true});
    }
    handleRegister()
    {
        var inputOK = this.state.firstName.length > 0 && 
        this.state.lastName.length > 0 && 
        this.state.email.length > 0 && 
        this.state.password.length > 0 &&
        this.state.adress.length > 0 && 
        this.state.phone.length > 0;

        if(inputOK)
        {
        if(this.state.emailValid && this.state.passValid)
        {
            if(this.state.password === this.state.passwordRepeat)
                {
                    this.setState({passwordsMatch : true})
                    var newUser = {
                        firstName : this.state.firstName,
                        lastName : this.state.lastName,
                        email : this.state.email,
                        password : this.state.password,
                        adress : this.state.adress,
                        phone : this.state.phone
                    }
                    this.props.handleRegister(newUser);
                }
            else
                this.setState({passwordsMatch : false})
            }
        }
        else
        {
            this.setState({showInfo : true,infoMessage : 'One or more fields is empty!'})
        }
    }
    closeInfo()
    {
        this.setState({showInfo : false,infoMessage : ''})
    }
    render()
    {
        return(
        <div className="register-container">
            <p className="text-center register-message">Please enter your information</p>
            <div className="input-container">
            <div className="login-label">First name</div>
            <input type="text" className="form-control input-field " placeholder="Your first name" onChange={this.handleNameChange} value={this.state.firstName}/>
            <div className="login-label">Last name</div>
            <input type="text" className="form-control input-field " placeholder="Your last name" onChange={this.handleLastNameChange} value={this.state.lastName}/>
            <div className="login-label">E-mail</div>
            <input type="text" className="form-control input-field " placeholder="Your email address" onChange={this.handleEmailChange} value={this.state.email}/>
            <div className={this.state.emailValid ? "hidden":"validator-message"}>Email has to be valid</div>
            <div className="login-label">Password</div>
            <input type="password" className="form-control input-field" placeholder="Your password" onChange={this.handlePasswordChange} value={this.state.password}/>
            <div className={this.state.passValid ? "hidden":"validator-message"}>Password has to be at least 6 characters long</div>
            <div className="login-label">Repeat password</div>
            <input type="password" className="form-control input-field" placeholder="Repeat password" onChange={this.handlePasswordRepeatChange} value={this.state.passwordRepeat}/>
            <div className={this.state.passwordsMatch ? "hidden":"validator-message"}>Password's don't match</div>
            <div className="login-label">Adress</div>
            <input type="text" className="form-control input-field " placeholder="Your adress" onChange={this.handleAdressChange} value={this.state.adress}/>
            <div className="login-label">Phone number</div>
            <input type="text" className="form-control input-field " placeholder="Your phone number" onChange={this.handlePhoneChange} value={this.state.phone}/>
            </div>
            <div className="login-buttons-wrap">
                <button onClick = {this.handleRegister} className="btn btn-outline-primary">REGISTER</button>
                <a onClick = {this.props.backToLogin} className="back-to-login">Already have account? <b>LOGIN</b></a>
            
            </div>
            <InfoModal visible= {this.state.showInfo} message = {this.state.infoMessage} onClose = {this.closeInfo}/>
        </div>


        )
    }
}