import React from 'react'

function Number(props) {

    let clickNumber = () => {
        props.onClickNumber(parseInt(props.children))
    }

    return (
        <div className="button" onClick={clickNumber}>{props.children}</div>
    )
}

export default Number