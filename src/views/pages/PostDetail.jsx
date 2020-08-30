import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';


const PostDetail = ({ postDetails, match }) => {

    useEffect(() => {
        setPost(postDetails)
        //getUserPosts(user.id) get comments
    }, [match.params.id])
    const history = useHistory()
    const [post, setPost] = useState()

    const returnPostsList = () => {
        history.push(`/posts`)
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
                        <div className="card-body text-justify">
                            <div className="mb-2">
                                <strong>Autor:</strong> {post?.userId}
                            </div>
                            <div className="mb-2">
                                <strong>Titulo:</strong> {post?.title}
                            </div>
                            <div className="mb-2">
                                <strong>Contenido: &nbsp;</strong>{post?.body}
                            </div>
                            <hr />
                            <div>
                                comentarios:
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ postDetails: state.posts.post });
export default connect(mapStateToProps)(PostDetail);




