import React from 'react'
import { Link } from 'react-router'
import useRegister from '../../hooks/useRegister'
import './RegisterScreen.css'

const RegisterScreen = () => {

    const {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        loading,
        error,
        response
    } = useRegister()

return (
    <div className='register_page'>
        <div className='register_container'>
            <div className='register_header'>
                <h1>Registrate en la aplicacion</h1>
            </div>

            <div className='register_card'>

        <form className='register_form' onSubmit={onSubmitForm}>
            <div className='register_field'>
                <label htmlFor="username">Nombre de usuario:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder='Tu nombre'
                    value={form_state.username} 
                    onChange={onChangeFieldValue} 
                />
            </div>

            <div className='register_field'>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder='No pongas 1234'
                    value={form_state.password} 
                    onChange={onChangeFieldValue} 
                />
            </div>
            <div className='register_field'>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder='nombre@email.com' 
                    value={form_state.email} 
                    onChange={onChangeFieldValue}
                />
            </div>
            {
                error && <span className='register_message_error'>{error.message}</span>
            }
            {
                response 
                && 
                response.ok 
                && 
                <span className='register_message_succes'>
                    Usuario registrado exitosamente, te enviaremos un mail con instrucciones.
                </span>
            }
            
            <button type="submit" className='register_button' disabled={loading}>Registrarse</button>
        </form>
            </div>

            <div className='register_footer'>
                <span>Ya tienes una cuenta? </span>
                <Link to="/login">iniciar sesion</Link>
            </div>
        </div>
    </div>
)
}

export default RegisterScreen