import React, { useEffect } from 'react'
import axios from '../utils/request'
import { Outlet, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { action, asyncAction } from '../redux/action'

function Login(props) {
    const handClick = () => {
        console.log(props)
        props.methods(asyncAction())
        console.log(props.value)
    }
    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div>
            <button onClick={handClick}>
                发送
            </button>
            <Outlet />
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        methods: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)