import React,{Component} from 'react';


export class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state = {email : '', password : ''}
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleEmailChange(event)
    {
        this.setState({email:event.target.value});
    }
    handlePasswordChange(event)
    {
        this.setState({password:event.target.value});
    }
    handleLogin()
    {
        
        this.props.handleLogin(this.state);
    }
    render()
    {
        return(
        <div className="login-container">
            <div className="input-container">
            <div className="login-label">E-mail</div>
            <input type="text" className="form-control input-field " placeholder="Vaša email adresa" onChange={this.handleEmailChange} value={this.state.email}/>
            <div className="login-label">Lozinka</div>
            <input type="password" className="form-control input-field" placeholder="Vaša lozinka" onChange={this.handlePasswordChange} value={this.state.password}/>
            </div>
            <div className="login-buttons-wrap">
                <button onClick={this.handleLogin} className="btn btn-outline-primary">LOGIN</button>
               
            </div>
        </div>
        )
    }
}