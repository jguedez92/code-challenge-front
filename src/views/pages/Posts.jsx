import React from 'react'

const Posts = () => {
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
                                <button type="button" className="list-group-item list-group-item-action">
                                    Cras justo odio
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">
                                    Dapibus ac facilisis in
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">
                                    Morbi leo risus
                                </button>
                                <button type="button" className="list-group-item list-group-item-action">
                                    Porta ac consectetur ac
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
