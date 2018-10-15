import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {open : false}

  }


  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div className="text-center">
        <button class="btn-outline-primary btn-lg btn-outline-dark" onClick={this.onOpenModal}>Login/Register</button>
        <Modal open={open} onClose={this.onCloseModal}>
       
        <div className="modal-fade">
          <div className="modal-header">
          <h5 className="modal-title">Logirajte se na svoj račun ili se registrirajte ukoliko ga ne posjedujete</h5>
          </div>
          <div className="modal-body">
          
          <div class="form-group">
            <label for="E-mail" class="control-label">Upišite vaš email:</label>
            <input type="text" class="form-control" id="E mail" value={this.state.inputEmail}></input>
          </div>
          
         <div class="form-group">
         
            <label for="password" class="control-label">Upišite vašu lozinku:</label>
            <input type="password" class="form-control" id="password" value={this.state.inputPassword}></input>
          </div>

         </div>

         
         <div className="footer modal-footer">
                <button type="button" className="btn btn-success">Login</button>
                <button type="button" className="btn btn-secondary">Register</button>
         </div>
      
        
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
