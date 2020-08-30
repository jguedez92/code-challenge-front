import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserByEmail } from '../redux/actions/Users'
const Comments = ({ usersList, commentsList }) => {

    useEffect(() => {
        setComments(commentsList)
    }, [commentsList])

    const [comments, setComments] = useState()

    return (
        <div className="accordion my-3" id="accordionExample">
            {comments?.map(comment =>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed d-flex" type="button" data-toggle="collapse" data-target={`#comment${comment.id}`} aria-expanded="false" aria-controls={`#${comment.id}`}>
                                <div className="col-4">
                                    <span className="text-muted">Email: </span>{comment.email}
                                </div>
                                <div className="col-8">
                                    <span className="text-muted">Titulo: </span>{comment.name}
                                </div>
                            </button>
                        </h2>
                    </div>
                    <div id={`comment${comment.id}`} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body text-justify">
                            <div className="mb-2">
                                <strong>Comentario: &nbsp;</strong> {comment.body}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({ usersList: state.users.users, commentsList: state.comments.comments });
export default connect(mapStateToProps)(Comments);
