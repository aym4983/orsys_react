import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            props: props,
            unUser: {}
        }
    }

    

    render(){
        return (
            <div className="User">
                <Link target="blank" to={"/user/" + this.props.user.id}>
                    <ul className="list-group-flush">
                        <li>user: {this.props.user.name + ' ' + this.props.user.prenom}</li>
                    </ul>
                </Link>
            </div>
        )
    }
}

export class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            props: props
        }
    }

    componentDidMount() {

        fetch(this.state.props.adrsrv + '/users')
            .then(response => { return response.json() })
            .then(rjson => {
                this.setState({ users: rjson });
            })
            .catch(response => {
                console.log('err', response);
            })
    }

    render() {
        return (
            <div className="Users card">
                {this.state.users.map((e, i) => {
                    return <User user={e} key={'user-' + i}></User>
                })}
            </div>
        );
    }
}

export default Users;
