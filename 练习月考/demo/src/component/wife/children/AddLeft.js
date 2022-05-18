import React, { useState, useEffect } from 'react';
import { uniqueId } from 'lodash'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js';
import { Dialog, Input, Form } from 'tdesign-react';
import { connect } from 'react-redux'

function AddLeft(props) {
    console.log(props)
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [city, setCity] = useState('')
    const [title, setTitle] = useState('')

    const [value, setValue] = useState(null)
    useEffect(() => {
        PubSub.subscribe('send', (_, data) => {
            setValue(data)
        })
    }, [])
    useEffect(() => {
        console.log(props.visible)
        if (props.visible) {
            console.log("真")
            setValue('')
        }
    }, [props.visible])

    return (
        <div>
            <Dialog
                header="Basic Modal"
                closeOnEscKeydown={true}
                confirmBtn={true}
                visible={props.visible}
                onClose={props.handleClose ? props.handleClose : props.compileClose}
                onConfirm={() => {
                    props.onConfirm
                        ? props.onConfirm(
                            {
                                name,
                                sex,
                                city,
                                title,
                                id: uniqueId(Math.random())
                            }
                        )
                        : props.sureConfirm({
                            name,
                            sex,
                            city,
                            title,
                            id: value.id.id
                        })
                }}
            >
                <Form>
                    <Input
                        placeholder={value ? value.id.name : '名字'}
                        defaultValue={value ? value.id.name : ''}
                        showClearIconOnEmpty={true}
                        autocomplete="adljflaskjdkl"
                        clearable={true}
                        onChange={(e) => {
                            setName(e)
                            // e.target.value = e
                        }}
                    />
                    <Input
                        placeholder={value ? value.id.sex : '性别'}
                        // defaultValue={value.id.sex}
                        onChange={(value) => {
                            setSex(value)
                        }}
                        style={{ marginTop: '30px' }}
                    />
                    <Input
                        placeholder={value ? value.id.city : '城市'}
                        // defaultValue={value.id.city}
                        onChange={(value) => {
                            setCity(value)
                        }}
                        style={{ marginTop: '30px' }}
                    />
                    <Input
                        placeholder={value ? value.id.title : '详细信息'}
                        // defaultValue={value.id.title}
                        onChange={(value) => {
                            setTitle(value)
                        }}
                        style={{ marginTop: '30px' }}
                    />
                    {props.title && props.title[4].name}
                </Form>
            </Dialog>
        </div >
    );
}
AddLeft.propTypes = {
    handleClose: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps, null)(AddLeft)