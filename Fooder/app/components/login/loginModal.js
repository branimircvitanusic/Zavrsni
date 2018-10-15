import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import '../../styles/login/loginModal.css';
import {Login} from './login.js';
import {Register} from './register.js';


var validator = require("email-validator");

export class LoginModal extends Component{

    constructor(props)
    {
        super(props);
        this.state = {isLogin : true, isRegister : false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.isLogin = this.isLogin.bind(this);
        this.isRegister = this.isRegister.bind(this);
    }
    isLogin()
    {
        this.setState({isLogin : true, isRegister : false})
    }
    isRegister()
    {
        this.setState({isLogin : false, isRegister : true})
    }
    handleLogin(user)
    {
        //api call to login user
        console.log(user);
    }
    handleRegister(user)
    {
        //api call to register user
        console.log(user);
    }
  
    render()
    {
        var active = this.state.isLogin ?  
        <Login handleLogin = {this.handleLogin}/>
        :
        <Register handleRegister = {this.handleRegister}/>

        return(
            <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <div onClick={this.isLogin} className={this.state.isLogin ? "header-half header-active" : "header-half"}>
                        <h5 className="modal-title modal-option-1">Login</h5>
                    </div>
                    <div onClick={this.isRegister} className={this.state.isRegister ? "header-half header-active" : "header-half"}>
                        <h5 className="modal-title modal-option-2">Register</h5>
                    </div>
                </div>
                <div className="modal-body">
                {active}
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.onClose}>
                    Close
                </button>
                </div>
            </Modal>
        )
    }
}