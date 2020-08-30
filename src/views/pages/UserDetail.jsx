import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import UserAcordeon from '../../components/UserAcordeon'
import { getUserPosts } from '../../redux/actions/Posts'

const UserDetail = ({ user, match }) => {

    useEffect(() => {
        setUserDetails(user)
        getUserPosts(user.id)
        
    }, [match.params.username])

    const [userDetails, setUserDetails] = useState()

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-y 5">
                    <div className="card shadow animate__animated animate__bounceInUp my-5">
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

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.users.user });
export default connect(mapStateToProps)(UserDetail);

