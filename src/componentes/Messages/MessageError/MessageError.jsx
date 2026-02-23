import React from 'react'
import './MessageError.css'

const MessageError = ({error}) => {

        if (!error) return null

    return (
        <div className="messages-error">
            <p>Ocurrió un error:</p>
            <span>{error.message}</span>
        </div>
    )
}


export default MessageError