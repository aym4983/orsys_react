import React from 'react';

function UserList(props) {

    return (
        <div className="UserList">
            
            <div className="panel panel-default">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                            </tr>
                            <tr>
                                <th>Prénom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.userList.map((e, i, l)=>{
                                    return (
                                    <tr key={'ligne-user-' + e.id}>
                                        <td>{e.prenom}</td>
                                        <td>{e.nom}</td>
                                    <td>{e.service}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
            
        </div>
    );
}

export default UserList;