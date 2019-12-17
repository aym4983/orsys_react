import React from 'react';
import { Render} from 'react-dom'

import TchatViewer from './compononent.TchatViewer/component.TchatViewer'
import TchatSender from './component.TchatSender/component.TchatSender'
import Users from './Users/Users'

import './component.Tchat.css'

class Tchat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: props,
        }
    }

    render () {
        return (
            <div className="Tchat container">
                <div className="row">
                <TchatViewer adrsrv={this.state.props.adrsrv}></TchatViewer>
                <Users adrsrv={this.state.props.adrsrv}></Users>
                </div>
                <TchatSender adrsrv = {this.state.props.adrsrv}></TchatSender>
            </div>
        )
    }
}

export default Tchat;