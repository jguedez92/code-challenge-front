import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Pagination } from 'antd';
import { setPost } from '../../redux/actions/Posts'

const Posts = ({ posts }) => {

    const [postsList, setPostList] = useState()
    const history = useHistory()
    useEffect(() => {
        if (posts == {}) {
            history.push(`/`)
        }
        setPostList(posts.slice((1 - 1) * 10, (1 * 10)))
    }, [])

    const postDetails = (post) => {
        setPost(post)
        history.push(`/posts/${post.id}`)
    }

    const onPageChange = (value) => {
        setPostList(posts.slice((value - 1) * 10, (value * 10)))

    }

    return (
        <div className="col-12">
            <div className="row d-flex justify-content-center pt-2">
                <div className="card card-posts my-5 animate__animated animate__bounceInRight">
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
                        <div className="container d-flex justify-content-center my-4">
                            <Pagination size="small" simple={true} defaultCurrent={1} total={posts?.length} onChange={onPageChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ posts: state.posts.posts });
export default connect(mapStateToProps)(Posts);
