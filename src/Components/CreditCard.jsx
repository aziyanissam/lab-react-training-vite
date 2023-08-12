import React from 'react'

function CreditCard(props) {
    const { bgColor, color } = props;

    return (
        <div className='d-flex mt-3 mx-5 '>
            <div className='rounded ' style={{ width: '400px', height: '200px', background: bgColor, color: color }}>
                <h6 className='text-end'>{props.type}</h6>
                <h3 className='text-center mt-5'>************{props.number.slice(-4)}</h3>
                <div className='d-flex justify-content-around' style={{ fontWeight: 'bold' }}>
                    <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</p>
                    <p>{props.bank}</p>
                </div>
                <p className='mx-5'>{props.owner}</p>
            </div>

        </div>
    )
}

export default CreditCard
