import React, {Component} from 'react'
import { useParams, withRouter } from 'react-router-dom';

class User extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            props: props,
            unUser: {
              //  service:{}
            },
            id: props.match.params.id
        }
    }

    componentDidMount(){
        console.log('url', this.state.props.adrsrv + '/users/' + this.state.id + '?_expand=service');
        fetch(this.state.props.adrsrv + '/users/' + this.state.id + '?_expand=service')
        .then(
            response => response.json())
        .then(r => this.setState({unUser: r}))
        .catch(r => console.log('err', r))
    }
    
    render() {
        console.log(this.state.unUser)
        return (
            <div className="User">
                <div className="user-img">
                    <img src="#" className="img-responsive" alt="image"/>
                </div>
    
                <div className="user-data">
                    Nom: <span className="user-name">{this.state.unUser.name}</span><br/>
                    Prénom: <span className="user-name">{this.state.unUser.prenom}</span>
                    Service: <span className="user-service">{this.state.unUser.service&&this.state.unUser.service.nom}</span>
                </div>
            </div>
        );
    }
}

export default withRouter(User);