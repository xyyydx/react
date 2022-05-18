import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hoc = (WillComponent) => {
    return function Hoc() {
        const navigate = useNavigate()
        const token = localStorage.getItem('token')
        useEffect(() => {
            if (!token) {
                navigate('/first')
            }
        }, [token])

        return (
            <>
                <WillComponent />
            </>
        )
    }
}

export default Hoc