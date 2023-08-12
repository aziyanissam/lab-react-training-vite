import React from 'react'

function Random({ max, min }) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div className='mt-3 mx-5' style={{ border: '2px solid black' }}>
            <h3 className='text-center'>Random value between {min} and {max} is {randomNum} </h3>
        </div>
    )
}

export default Random
