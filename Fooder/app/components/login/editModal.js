import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import fire from '../../config/FirebaseConfig.js';
import '../../styles/login/editModal.css';
import firestore from '../../config/FirebaseConfig.js';
import { InfoModal } from '../info/infoModal';
import { ChangePasswordModal } from './changePasswordModal';

export class EditModal extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
           isLoading : true,
           infoMessage : '', 
           showInfo : false,
           showChangePasswordModal : false
         };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAdressChange = this.handleAdressChange.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.closeInfoModal = this.closeInfoModal.bind(this);
        this.closeChangePasswordModal = this.closeChangePasswordModal.bind(this)
      
    }

    closeChangePasswordModal()
    {
        this.setState({showChangePasswordModal : false})
    }

    closeInfoModal()
    {
        this.setState({showInfo : false, infoMessage : ''})
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
    handleDeleteUser()
    {
        
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            console.log("Uspjesno izbrisan user!")
            
            }).catch(function(error) {
                console.log("errrrror")
            });
    }


 /*  async handleUpdate(user)
    {
        await fire.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then(response => 
            {
                var db = fire.firestore();
                db.collection('users').doc(response.user.uid).update({firstName : user.firstName,lastName : user.lastName , email : user.email, phone : user.phone,adress : user.adress})
                .then(this.setState({isLogin : true, isRegister : false, showInfo : true,infoMessage : "Podaci promijenjeni!"}))
            })
        .catch(error => 
            {
                this.setState({showInfo : true, infoMessage : error.message})
            })
    }
*/

async handleUpdate()
{
    
    var db = fire.firestore();
    db.collection('users').doc(this.props.signedInUser.uid).update({firstName : this.state.firstName, lastName : this.state.lastName, phone : this.state.phone,
         adress : this.state.adress})

    .then(
        (console.log("Uspjesno promijenjeno!"))
       
    )
    this.setState({showInfo : true, infoMessage : 'Uspjesno ste promijenili podatke!'})
}


    closeInfoModal()
    {
        this.setState({showInfo : false, infoMessage : ''})
    }
    


    componentWillReceiveProps(nextProps)
    {
        if(this.props !== nextProps) {
   
        if(nextProps.signedInUser !== null) {
      
        
        var db = firebase.firestore();
        var userRef = db.collection("users").doc(nextProps.signedInUser.uid);
        userRef.get()
            .then(doc => 
            {
                if (doc.exists) 
                {

                    var userData = doc.data();
                    this.setState({
                        
                        firstName : userData.firstName,
                        lastName : userData.lastName,
                        adress : userData.adress,
                        phone : userData.phone,

                        isLoading : false
                    }
                   );
                } 
                else 
                {
                    console.log("No such document!");
                }
            })
            .catch(function(error) {
            console.log("Error getting document:", error);
        });
        }
    }
    }
 
    render()   
    {
        console.log(this.state)
        var active = this.state.isLoading ?
        <h1>Loading...</h1> : 
        <div className="register-container">
        
        <div className = "change-data-header">
            <p className="text-center register-message">Promijenite svoje podatke: </p>
        </div>
        <div className="modal-body">
        <div className="change-data-container">
        <div className="input-container">
        <div className="login-label">Ime</div>
        <input type="text" className="form-control input-field " placeholder="Vaše ime" onChange={this.handleNameChange} value={this.state.firstName}/>
        <div className="login-label">Prezime</div>
        <input type="text" className="form-control input-field " placeholder="Vaše prezime" onChange={this.handleLastNameChange} value={this.state.lastName}/>
        
        <div className="login-label">Adresa</div>
        <input type="text" className="form-control input-field " placeholder="Vaša adresa" onChange={this.handleAdressChange} value={this.state.adress}/>
        <div className="login-label">Broj telefona</div>
        <input type="text" className="form-control input-field " placeholder="Vaš telefonski broj" onChange={this.handlePhoneChange} value={this.state.phone}/>
        </div>
        <div className="login-buttons-wrap">
         <button onClick = {this.handleUpdate} className="btn btn-outline-primary">Promijeni podatke!</button>
         <br/>
            <button onClick = {this.props.handleChangePasswordClick} className="btn btn-warning">Promijeni lozinku!</button>
        <br/>
            <button onClick = {this.handleDeleteUser} className="btn btn-danger">Izbriši usera!</button>
            <br/>
            </div>
            <div className="modal-footer">
            <button className="btn btn-secondary" onClick={this.props.onClose}>
                    Zatvori
                </button>
                </div>
        
        </div>        
        </div>
       { <InfoModal visible= {this.state.showInfo} message = {this.state.infoMessage} onClose = {this.closeInfoModal}/> }
       { <ChangePasswordModal visible = {this.state.showChangePasswordModal} onClose = {this.closeChangePasswordModal} /> }
    </div>

        return(

                <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
            
                {active}
                
                </Modal>
        )

    }

    }