import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


import { getComments } from '../../redux/actions/Comments'
import Comments from '../../components/Comments'
import { getUserById, setUser } from '../../redux/actions/Users'

const PostDetail = ({ usersList, postDetails, match }) => {

    useEffect(() => {
        const newPostDetail = { ...postDetails, user: getUserById(usersList, postDetails.userId) }
        setPost(newPostDetail)
        getComments(newPostDetail.id)
    }, [match.params.id])
    const history = useHistory()
    const [post, setPost] = useState()

    const returnPostsList = () => {
        history.push(`/posts`)
    }

    const userDetails = (user) => {
        setUser(user)
        history.push(`/users/${user.username}`)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-link my-3" onClick={() => returnPostsList()}>
                        Volver al Listado de Posts
                    </button>
                </div>
                <div className="col-12">
                    <div className="card shadow mb-5 animate__animated animate__bounceInUp ">
                        <div className="card-header pt-3">
                            <h5 className="mt-2 text-primary">Datos de Post</h5>
                        </div>
                        <div className="card-body px-5  text-justify">
                            <div className="mb-2">
                                <strong>Autor:</strong> <button type="button" className="btn btn-link"
                                 onClick={() => userDetails(post?.user)}>
                                    {post?.user.name}
                                </button>
                            </div>
                            <div className="mb-2">
                                <strong>Titulo:</strong> {post?.title}
                            </div>
                            <div className="mb-2">
                                <strong>Contenido: &nbsp;</strong>{post?.body}
                            </div>
                            <hr />
                            <div>
                                Comentarios:
                                <br />
                                <Comments />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ usersList: state.users.users, postDetails: state.posts.post });
export default connect(mapStateToProps)(PostDetail);




