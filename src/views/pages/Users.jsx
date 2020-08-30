import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

import { setUser } from '../../redux/actions/Users'


const Users = ({ users }) => {

    const [usersList] = useState(users);
    const history = useHistory()
    useEffect(() => {
        if (!usersList) {
            history.push(`/`)
        }
    }, [])

    const userDetails = (user) => {
        setUser(user)
        history.push(`/users/${user.username}`)
    }

    return (
        <div className="col-12">
            <div className="row d-flex justify-content-center py-5">
                <div className="card shadow-lg card-width my-5 animate__animated animate__bounceInRight">
                    <div className="card-header">
                        <div className="card-title mt-2">
                            <h5>Lista de Usuarios</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group ">
                            <div className="list-group">
                                {usersList?.map(user =>
                                    <button type="button" className="list-group-item list-group-item-action d-flex justify-content-center" onClick={() => userDetails(user)}>
                                        <div>
                                            Nombre: <span className="text-primary">{user.name}</span>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ users: state.users.users });
export default connect(mapStateToProps)(Users);