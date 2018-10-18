import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import '../../styles/login/loginModal.css';
import fire from '../../config/FirebaseConfig.js';
import { InfoModal } from '../info/infoModal';

export class ChangePasswordModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            password : '',
            passwordRepeat : '',
            passValid : true,
            passwordsMatch : true,
            infoMessage : '', 
            showInfo : false,
            
    };
        
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.closeInfoModal = this.closeInfoModal.bind(this);
        this.passwordChangedModal = this.passwordChangedModal.bind(this);
        this.passwordNotChangedModal = this.passwordNotChangedModal.bind(this);

    }

    closeInfoModal()
    {
        this.setState({showInfo : false, infoMessage : ''})
    }
    passwordChangedModal()
    {
        this.setState({showInfo : true, infoMessage : 'Uspjesno promijenjeno'})
    }

    passwordNotChangedModal()
    {
        this.setState({showInfo : true, infoMessage : 'Mora imati najmanje 6 znakova!'})
    }

    handlePasswordChange(event)
    {
        this.setState({password : event.target.value})
    }

  /*  handlePasswordChange(event)
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
*/
    handleChangePassword(user)
    {
        var user = firebase.auth().currentUser;
        
        if(this.state.password > 6)
        var newPassword = this.state.password;
      /*  if(this.state.password.length > 0) {

            if(this.state.password === this.state.passwordRepeat) {

                this.setState({passwordsMatch : true})
            */
           
            
         
        user.updatePassword(newPassword).then(function() {
            // Update successful.
           alert('Uspjesno promijenjeno!')
          //(console.log("Uspjesno promijenjeno"))
        })
        .catch(function(error) {
            // An error happened.
            //this.setState({showInfo: true, infoMessage : 'Lozinka mora imati najmanje 6 znakova!'})
            alert('Lozinka mora imati najmanje 6 znakova!')
       // (console.log("Nije uspjesno promijenjeno!"))


        }
)
//this.setState({showInfo : true, infoMessage : 'Uspjesno ste promijenili lozinku!'})
/*if(newPassword > 6)


else
*/

}


    

    render() {

        return(
            <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                        <h5 className="info-modal-title">Unos nove lozinke</h5>
                </div>
                <div className="modal-body">
                <div className="login-label">Lozinka</div>
                <input type="password" className="form-control input-field" placeholder="Lozinka mora imati najmanje 6 znakova!" onChange={this.handlePasswordChange} />
                
                
                <div className="modal-footer">
                <button type="button" className="btn btn-warning" onClick={this.handleChangePassword}>Promijeni lozinku!</button>
                <button type="button" className="btn btn-secondary" onClick={this.props.onClose}> Zatvori </button>
                </div>
                </div>
                { <InfoModal visible= {this.state.showInfo} message = {this.state.infoMessage} onClose = {this.closeInfoModal}/> }
            </Modal>


        )
 
        


    }

    }

    
    