import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setPost } from '../../redux/actions/Posts'

const Posts = ({ posts }) => {

    const [postsList] = useState(posts)
    const history = useHistory()
    useEffect(() => {
        if (!postsList) {
            history.push(`/`)
        }
    }, [])

    const postDetails = (post) => {
        setPost(post)
        history.push(`/posts/${post.id}`)
    }
    return (
        <div className="col-12">
            <div className="row d-flex justify-content-center py-5">
                <div className="card card-width my-5 animate__animated animate__bounceInRight">
                    <div className="card-header">
                        <div className="card-title mt-2">
                            <h5>Lista de Posts</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <ul className="list-group ">
                            <div className="list-group">
                                {postsList?.map(post =>
                                    <button type="button" className="list-group-item list-group-item-action" onClick={() => postDetails(post)}>
                                        <div>
                                            Titulo: <span className="text-primary">{post.title}</span>
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

const mapStateToProps = (state) => ({ posts: state.posts.posts });
export default connect(mapStateToProps)(Posts);
