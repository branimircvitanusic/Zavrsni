import React,{Component} from 'react';
import Modal from 'react-bootstrap4-modal';
import '../../styles/login/loginModal.css';

export class InfoModal extends Component{

    render()
    {
        var message = this.props.message;
        return(
            <Modal visible={this.props.visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                        <h5 className="info-modal-title">Info</h5>
                </div>
                <div className="modal-body">
                {message}
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.props.onClose}>
                    OK
                </button>
                </div>
            </Modal>
        )
    }
}