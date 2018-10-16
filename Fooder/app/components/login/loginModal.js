import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import '../../styles/login/loginModal.css';
import {Login} from './login.js';
import {Register} from './register.js';

import fire from '../../config/FirebaseConfig.js';
import { InfoModal } from '../info/infoModal';


var validator = require("email-validator");

export class LoginModal extends Component{

    constructor(props)
    {
        super(props);
        this.state = {isLogin : true, isRegister : false,infoMessage : '', showInfo : false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.isLogin = this.isLogin.bind(this);
        this.isRegister = this.isRegister.bind(this);
        this.closeInfoModal = this.closeInfoModal.bind(this);
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
        fire.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(response => {
            this.props.userLoggedIn(user);
        })
        .catch(error => {
            this.setState({showInfo : true,infoMessage : error.message})
        })
    }
    async handleRegister(user)
    {
        //api call to register user
        await fire.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(response => 
            {
                var db = fire.firestore();
                db.collection('users').doc(response.user.uid).set({firstName : user.firstName,lastName : user.lastName , email : user.email, phone : user.phone,adress : user.adress})
                .then(this.setState({isLogin : true, isRegister : false, showInfo : true,infoMessage : "Registration successfull!"}))
            })
        .catch(error => 
            {
                this.setState({showInfo : true, infoMessage : error.message})
            })
    }
    closeInfoModal()
    {
        this.setState({showInfo : false, infoMessage : ''})
    }
    
    render()
    {
        var active = this.state.isLogin ?  
        <Login handleLogin = {this.handleLogin}/>
        :
        <Register backToLogin = {this.isLogin} handleRegister = {this.handleRegister}/>

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
                <InfoModal visible={this.state.showInfo} message={this.state.infoMessage} onClose= {this.closeInfoModal}/>
            </Modal>
        )
    }
}