import React, { useEffect, useState } from 'react'

const UserAcordeon = (props) => {

    useEffect(() => {
        setAddress(props.address)
        setCompany(props.company)
    }, [props])

    const [address, setAddress] = useState()
    const [company, setCompany] = useState()


    return (
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Informacion de Dirección
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body text-justify">
                        <div className="mb-2">
                            <strong>Calle: &nbsp;</strong>{address?.street}
                        </div>
                        <div className="mb-2">
                            <strong>Suite: &nbsp;</strong>{address?.suite}
                        </div>
                        <div className="mb-2">
                            <strong>Ciudad: &nbsp;</strong>{address?.city}
                        </div>
                        <div className="mb-2">
                            <strong>Codigo Postal: &nbsp;</strong>{address?.zipcode}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Informacion de Compañia
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body text-justify">
                        <div className="mb-2">
                            <strong>Nombre: &nbsp;</strong>{company?.name}
                        </div>
                        <div className="mb-2">
                            <strong>Descipcion: &nbsp;</strong>{company?.catchPhrase}
                        </div>
                        <div className="mb-2">
                            <strong>Sector: &nbsp;</strong>{company?.bs}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAcordeon
