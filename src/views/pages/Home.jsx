import React from 'react'

const Home = () => {
    return (
        <div className="col-12">
            <div className="row d-flex justify-content-center py-5">
                <div className="container">
                    <div className="jumbotron bg-light p-5  my-5 animate__animated animate__bounceInUp">
                        <h1 class="display-4">Bienvenidos!</h1>
                        <hr class="my-4" />   
                        <p class="lead">
                            Esta es una web simple empleando Laravel en el Backend y React en el Frontend.
                        </p>                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
