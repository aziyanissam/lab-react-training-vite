import React from 'react'

function IdCard(props) {
    return (

        <div className='d-flex mt-3 mx-5' style={{ border: '2px solid black' }}>
            <img src={props.picture} alt="" />
            <div className='ms-3 mt-2'>
                <p><b>First Name :</b> {props.firstName} </p>
                <p><b>Last Name :</b> {props.lastName} </p>
                <p><b>Gender :</b> {props.gender} </p>
                <p><b>Height :</b> {props.height} </p>
                <p><b>Birth : </b>{props.birth.toLocaleDateString()} </p>
            </div>

        </div>
    )
}

export default IdCard
