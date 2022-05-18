import React from 'react'
import { Link } from 'react-router-dom'

function Err() {
    return (
        <>
            <div>
                您还未登录,请先
                <Link to='/login'>登录</Link>
            </div>
        </>
    )
}

export default Err