import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input, Select, notification, Button } from 'antd';

import { insertPost } from '../redux/actions/Posts'

const FormPost = ({ users }) => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const showModal = () => {
        setVisible(true)
    };
    const handleOk = e => {
        setVisible(false)
    };
    const handleCancel = e => {
        setVisible(false)
    };

    const onFinish = values => {
        setLoading(true)
        const post = values
        insertPost(post)
            .then(res => {
                setLoading(false)
                notification.success({ message: 'Post Registrado', description: 'Se ha Registrado el Post con exito' })
                setTimeout(() => {
                    setVisible(false)
                }, 2000);
            })
            .catch(error => {
                setLoading(false)
                notification.error({ message: 'Error', description: 'hubo un error al registrar el post' })
            })

    };
    const { TextArea } = Input;
    const options = []
    users.map(user => (options.push({
        value: user.id,
        label: user.name
    })))


    return (
        <Fragment>
            <Button type="link" onClick={() => showModal()}>
                Agregar Post
            </Button>
            <Modal title="Agregar Post" visible={visible} onOk={() => handleOk()} onCancel={() => handleCancel()}>
                <div className="col-12">
                    <div className="row d-flex justify-content-center">
                        <div className="card p-3 my-2">
                            <div className="card-title">
                                <h5>Formulario</h5>
                                <hr />
                            </div>

                            <div className="card-body">
                                <Form name="basic" onFinish={onFinish} >
                                    <Form.Item name="email" label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'El dato ingresado no es valido para un Email',
                                            },
                                            {
                                                required: true,
                                                message: 'Ingrese su email',
                                            },
                                        ]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Autor" name="userId"
                                        rules={[{ required: true, message: 'Por Favor ingrese el titulo del post' }]} >
                                        <Select placeholder="Seleccione su usuario" options={options} />
                                    </Form.Item>
                                    <Form.Item label="Titulo" name="title"
                                        rules={[{ required: true, message: 'Por Favor ingrese el titulo del post' }]} >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Contenido" name="body"
                                        rules={[{ required: true, message: 'Por Favor ingrese el titulo del post' }]} >
                                        <TextArea rows={4} allowClear={true} />
                                    </Form.Item>
                                    <Form.Item >
                                        <div className="container d-flex justify-content-center">
                                        <Button type="primary" htmlType="submit" loading={loading}>
                                                {loading ? ('Cargando...') : ('Registrar')}
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({ users: state.users.users });
export default connect(mapStateToProps)(FormPost);

