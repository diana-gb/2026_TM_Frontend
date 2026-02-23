import React from 'react'
import './MessagesForm.css'

const MessagesForm = ({value, onChange, onSubmit}) => {

return (
    <div className='message-form-container'>
        <form className='message-form' onSubmit={onSubmit}>
            <input 
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Escribe un mensaje.."
            />
            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default MessagesForm