import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { setPost } from '../redux/actions/Posts'

const UserPostsList = (userPosts) => {
    useEffect(() => {
        setPostList(userPosts.userPosts)
    }, [])
    const [postList, setPostList] = useState()
    const history = useHistory()
    const postDetails = (post) => {
        setPost(post)
        history.push(`/posts/${post.id}`)
    }

    return (
        <div className="card shadow-lg card-width mb-5 animate__animated animate__bounceInRight">
            <div className="card-header">
                <div className="card-title mt-2">
                    <h5 className="text-primary">Posts</h5>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-group ">
                    <div className="list-group">
                        {postList?.map(post =>
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
    )
}

const mapStateToProps = ({ posts }) => ({ userPosts: posts.userPosts });
export default connect(mapStateToProps)(UserPostsList);

