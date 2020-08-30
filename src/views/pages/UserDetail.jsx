import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import UserAcordeon from '../../components/UserAcordeon'
import { getUserPosts } from '../../redux/actions/Posts'

import UserPostsList from '../../components/UserPostsList'

const UserDetail = ({ user, match }) => {

    useEffect(() => {
        setUserDetails(user)
        getUserPosts(user.id)
    }, [match.params.username])
    const history = useHistory()
    const [userDetails, setUserDetails] = useState()

    const returnUsersList = () =>{
        history.push(`/users`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-link my-3" onClick={() => returnUsersList()}>
                        Volver al Listado de Usuarios
                    </button>
                </div>
                <div className="col-6">
                    <div className="card shadow mb-5 animate__animated animate__bounceInUp ">
                        <div className="card-header pt-3">
                            <h5 className="mt-2 text-primary">Datos de Usuario</h5>
                        </div>
                        <div className="card-body text-center">
                            <div className="row d-flex justify-content-around">
                                <div className="mb-2">
                                    <strong>Nombre:</strong> {user.name}
                                </div>
                                <div className="mb-2">
                                    <strong>Username:</strong> {user.username}
                                </div>
                            </div>

                            <div className="mb-2">
                                <strong>Email: &nbsp;</strong>{user.email}
                            </div>
                            <div className="mb-2">
                                <strong>Telefono:&nbsp;</strong> {user.phone}
                            </div>
                            <div className="mb-2">
                                <strong>Sitio Web:&nbsp;</strong> {user.website}
                            </div>
                            <hr />
                            <UserAcordeon address={user.address} company={user.company} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <UserPostsList />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.users.user, userPosts: state.posts.userPosts });
export default connect(mapStateToProps)(UserDetail);

