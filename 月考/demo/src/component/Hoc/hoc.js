import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hoc = (WillComponent) => {
    return function Hoc() {
        const token = localStorage.getItem('token')
        const jump = useNavigate()
        useEffect(() => {
            if (!token) {
                jump('/err')
            }
        }, [])
        return (
            <WillComponent />
        )
    }
}
export default Hoc
