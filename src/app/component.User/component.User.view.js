import React from 'react';

function User(props) {
    console.log(props);

    return (
        <div className="User">
            <div className="user-img">
                <img src="#" className="img-responsive" alt="image"/>
            </div>

            <div className="user-data">
                Nom: <span className="user-name">{props.unUser.nom}</span><br/>
                Prénom: <span className="user-name">{props.unUser.prenom}</span>
            </div>
        </div>
    );
}

export default User;