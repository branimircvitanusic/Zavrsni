import React,{Component} from 'react';

export class Register extends Component{
    constructor(props)
    {
        super(props);
        this.state = {name : '',email : '', password : '',passwordRepeat : ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordRepeatChange = this.handlePasswordRepeatChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleNameChange(event)
    {
        this.setState({name:event.target.value});
    }
    handleEmailChange(event)
    {
        //validate 
        this.setState({email:event.target.value});
    }
    handlePasswordChange(event)
    {
        this.setState({password:event.target.value});
    }
    handlePasswordRepeatChange(event)
    {
        //check if this password is same as password
        //if not let user know
        this.setState({passwordRepeat:event.target.value});
    }
    handleRegister()
    {
        this.props.handleRegister(this.state);
    }
    render()
    {
        return(
        <div className="register-container">
            <p className="text-center register-message">Please enter your information</p>
            <div className="input-container">
            <div className="login-label">Name</div>
            <input type="text" className="form-control input-field " placeholder="Your name" onChange={this.handleNameChange} value={this.state.name}/>
            <div className="login-label">E-mail</div>
            <input type="text" className="form-control input-field " placeholder="Your email address" onChange={this.handleEmailChange} value={this.state.email}/>
            <div className="login-label">Password</div>
            <input type="password" className="form-control input-field" placeholder="Your password" onChange={this.handlePasswordChange} value={this.state.password}/>
            <div className="login-label">Repeat password</div>
            <input type="password" className="form-control input-field" placeholder="Repeat password" onChange={this.handlePasswordRepeatChange} value={this.state.passwordRepeat}/>
            </div>
            <div className="login-buttons-wrap">
                <button onClick = {this.handleRegister} className="btn btn-outline-primary">REGISTER</button>
                <a className="back-to-login">Already have account? <b>LOGIN</b></a>
            
            </div>
        </div>

        )
    }
}