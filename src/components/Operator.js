import React from 'react'

function Operator(props) {
    return (
        <div className="button">
            {props.children}
        </div>
    )
}

export default Operator