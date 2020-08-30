import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd';
import { setPost } from '../../redux/actions/Posts'
import FormPost from '../../components/FormPost'

const Posts = ({ posts }) => {

    const [postsList, setPostList] = useState()
    const [page, setPage] = useState(1)
    const totalPages = (posts.length / 10)
    const history = useHistory()
    useEffect(() => {
        if (posts == {}) {
            history.push(`/`)
        }
        console.log(page)
        setPostList(posts.slice((page - 1) * 10, (page * 10)))
    }, [])

    useEffect(() => {
        onPageChange(page)
    }, [page])

    const postDetails = (post) => {
        setPost(post)
        history.push(`/posts/${post.id}`)
    }

    const onPageChange = (value) => {
        setPostList(posts.slice((value - 1) * 10, (value * 10)))
    }

    const nextPage = () => {
        setPage(page + 1)

    }

    const previousPage = () => {
        setPage(page - 1)
    }

    return (
        <div className="col-12">
            <div className="row d-flex justify-content-center pt-2">
                <div className="col-7 my-3 d-flex justify-content-end">
                    <FormPost />
                </div>
                <div className="card card-posts mb-5 animate__animated animate__bounceInRight">
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
                        <div className="container d-flex justify-content-around my-4">
                            {page == 1 ? (<Button type="primary" disabled>Previous</Button>)
                                : (<Button type="primary" onClick={() => previousPage()}>Anterior</Button>)}

                            {page == totalPages ? (<Button type="primary" disabled>Siguiente</Button>)
                                : (<Button type="primary" onClick={() => nextPage()} >Siguiente</Button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ posts: state.posts.posts });
export default connect(mapStateToProps)(Posts);
/*


*/