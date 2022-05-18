import React from 'react'

const Hoc = (WillComponent) => {
    return function hoc() {
        return (
            <div>hoc</div>
        )
    }
}

export default Hoc
