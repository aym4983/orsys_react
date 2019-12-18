import React, { Component } from 'react';
import moment from 'moment';
import Modal from 'react-modal'
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
export class TchatSender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props,
            modal: {
                isOpen: false,
                message: 'Hello',
                label: 'My modal'
            }
        }
        Modal.setAppElement("#root");
    }

 

    toggleModal = () => {
        this.setState({
            modal: {
                isOpen: (!this.state.modal.isOpen),
                message: this.state.modal.message
            }
        })
    }

    sendMessage() {
        let message = {
            date: moment().format('YYYY-MM-DDThh:mm:ss.000Z'),
            userId: 0,
            message: this.state.message
        }

        let _xhr = new XMLHttpRequest();
        _xhr.open('POST', this.state.props.adrsrv + '/publicDiscussions');
        _xhr.setRequestHeader('Content-Type', 'application/json');
        _xhr.onreadystatechange = (e) => {

            this.setState({
                modal: {message: 'envoi en cours...'}
            })
            if (e.target.readyState < XMLHttpRequest.DONE)
                return;

            if (e.target.status === 201)
                this.setState(
                    {
                    message: '',
                    modal: {isOpen: false}
                })
        }
        _xhr.send(JSON.stringify(message));
    }

    render() {
        return (
            <div className="Sender">
                <Modal isOpen={this.state.modal.isOpen} style={customStyles}>
                    <p>{this.state.modal.message}</p>
                    <button onClick={this.toggleModal}>Fermer</button>
                </Modal>
                <div className="SenderMessage form-group row">
                    <input type="text" className="form-control" placeholder="Saisissez votre message"
                        onChange={(e) => {
                            this.setState({ message: e.target.value })
                        }} 
                        value={ this.state.message} />
                </div>
                <div className="SenderSubmit form-group row">
                    <button type="submit" className="btn btn-primary" onClick={(e) =>{ 
                        this.toggleModal();
                        this.sendMessage()}}>Envoyer</button>
                </div>
            </div>
        );
    }
}

export default TchatSender;
