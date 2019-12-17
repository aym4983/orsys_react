import React, { Component } from 'react';
import Moment from 'moment'
import './component.TchatViewer.css'
import moment from 'moment';

function Message(props) {
    return (
        <div className="viewer-message row">
            <div className="card-group">
            <div className="viewer-message-user card">
                user {props.message.userId} : {props.message.user.name}<br/>
                {moment(props.message.date).format('YYYY-MM-DD hh:mm:ss')}
            </div>
            <div className="viewer-message-message card" >
                {props.message.message}
            </div>
            </div>
        </div>
    )
}

export default class TchatViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: Moment(),
            messages: [],
            adrsrv: props.adrsrv
        }
    }

    componentDidMount() {
        this.Interval = setInterval(() => {
            let _dateTime = moment().add(-20, 'm').format('YYYY-MM-DDThh:mm:ss.000Z');
            fetch(this.state.adrsrv + '/publicDiscussions?_expand=user&_sort=date&date_lte=' + moment().format('YYYY-MM-DDThh:mm:ss.000Z')
             + '&date_gte=' + _dateTime + '&_limit=5')
                .then(response => {
                    return response.json()
                })
                .then(jresponse => {
                    this.setState({
                        messages: jresponse
                    })
                })
                .catch(response => {
                    console.log('err', response);
                })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.Interval);
    }

    render() {
        return (
            <div className="TchatViewer card-body col-9">
                {
                    this.state.messages.map((e, i) => {
                        return <Message message={e} key={'message' + i}></Message>
                    })
                }
            </div>
        )
    }

}