import React from 'react'

function BoxColor({ r, g, b }) {
    const newR = r < 16 ? `0${r.toString(16)}` : r.toString(16);
    const newG = g < 16 ? `0${g.toString(16)}` : g.toString(16);
    const newB = b < 16 ? `0${b.toString(16)}` : b.toString(16);
    const newArr = [newR, newG, newB]
    const newStr = newArr.join("");

    return (
        <div className='d-flex flex-column mt-3 mx-5' style={{ border: '2px solid black', background: `rgb(${r},${g},${b})` }} >
            <h4 className='text-center'>rgb({r},{g},{b})</h4>
            <h4 className='text-center'>{`#${newStr}`}</h4>
        </div>
    )
}

export default BoxColor
