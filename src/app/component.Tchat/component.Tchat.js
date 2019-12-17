import React from 'react';
import { Render} from 'react-dom'

import Main from './compononent.Main/component.Main'
import Aside from './component.Aside/component.Aside'
import Footer from './component.Footer/component.Footer'

import './component.Tchat.css'

class Tchat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: props
        }
    }

    render () {
        return (
            <div className="Tchat container">
                <div className="row">
                <Main></Main>
                <Aside></Aside>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Tchat;