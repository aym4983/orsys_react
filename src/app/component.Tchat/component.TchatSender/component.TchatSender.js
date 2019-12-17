import React, { Component } from 'react';
import moment from 'moment';

export class TchatSender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props
        }
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
            if (e.target.readyState < XMLHttpRequest.DONE)
                return;

            if (e.target.status === 201)
                this.setState({message: ''})
                
        }
        _xhr.send(JSON.stringify(message));
    }

    render() {
        return (
            <div className="Sender">
                <div>

                </div>
                <div className="SenderMessage form-group row">
                    <input type="text" className="form-control" placeholder="Saisissez votre message"
                        onChange={(e) => {
                            this.setState({ message: e.target.value })
                        }} 
                        value={ this.state.message} />
                </div>
                <div className="SenderSubmit form-group row">
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.sendMessage()}>Envoyer</button>
                </div>
            </div>
        );
    }
}

export default TchatSender;
