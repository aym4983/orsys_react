import React, { Component } from 'react';
import moment from 'moment';

function User(props){
    return (
        <div className="User">
            <ul className="list-group-flush">
                <li>user: {props.user.name + ' ' + props.user.prenom}</li>
            </ul>
            
        </div>
    )
}

export class Users extends React.Component {

    constructor(props){
        super(props);
        this.state={
            users: [],
            props: props
        }
    }

    componentDidMount(){

        fetch(this.state.props.adrsrv + '/users?lastConn_gte='+ moment().add(-10, 'm').format('YYYY-MM-DDThh:mm:ss.000Z'))
        .then(response => {return response.json()})
        .then(rjson => {
            this.setState({users: rjson});
        })
        .catch(response => {
            console.log('err', response);
        })
    }

    render() {
        return (
            <div className="Users card">
               { this.state.users.map((e, i) => {
                    return <User user={e} key={'user-' + i}></User>
                })}
            </div>
        );
    }
}

export default Users;
