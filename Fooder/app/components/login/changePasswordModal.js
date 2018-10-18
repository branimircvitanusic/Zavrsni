import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import '../../styles/login/loginModal.css';
import fire from '../../config/FirebaseConfig.js';

export class ChangePasswordModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            password : '',
            passwordRepeat : '',
            passValid : true,
            passwordsMatch : true,
            
    };
        
        this.handleChangePassword = this.handleChangePassword.bind(this);
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
    handleChangePassword(event)
    {
        var user = firebase.auth().currentUser;
        var newPassword = window.prompt('upisite novu lozinku');
      /*  if(this.state.password.length > 0) {

            if(this.state.password === this.state.passwordRepeat) {

                this.setState({passwordsMatch : true})
            */

        user.updatePassword(newPassword).then(function() {
            // Update successful.
            console.log("Uspjesno promijenjeno")
        }).catch(function(error) {
            // An error happened.
            console.log("Nije promijenjeno")

})
}


    

    render() {

        return(
            <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                        <h5 className="info-modal-title">Unos nove lozinke</h5>
                </div>
                <div className="modal-body">
                <div className="login-label">Lozinka</div>
                <input type="password" className="form-control input-field" placeholder="Vaša nova lozinka" onChange={this.handleChangePassword} value={this.state.password}/>
                <div className={this.state.passValid ? "hidden":"validator-message"}>Lozinka mora imati najmanje 6 znakova</div>
                
                <div className="modal-footer">
                <button type="button" className="btn btn-warning" onClick={this.handleChangePassword}>Promijeni lozinku!</button>
                <button type="button" className="btn btn-secondary" onClick={this.props.onClose}> Zatvori </button>
                </div>
                </div>
            </Modal>


        )
 
        


    }

    }

    
    