import React from 'react'

function Greetings(props) {
    const lang = props.lang
    const greeting = lang === 'de' ? 'Hallo' : lang === 'en' ? 'Hello' : lang === 'mn' ? 'Namaste' : 'Bonjour'

    return (
        <div className='mt-3 mx-5' style={{ border: '2px solid black' }}>
            <h3 className='text-center'>{greeting} {props.children}</h3>
        </div>
    )
}

export default Greetings
