import React from 'react'
import { Link} from 'react-router'
import useLogin from '../../hooks/useLogin'
import './LoginScreen.css'

const LoginScreen = () => {

const {
    form_state,
    onChangeFieldValue,
    onSubmitForm,
    loading,
    error,
    response
} = useLogin()

    return (
        <div className='login_page'>
            <div className='login_container'>

            <div className='login_logo'>
            {/* buscar logo */}
            <span className='login_logo_text'>slack</span>
            </div>

            <div className='login_header'>
            <h1>Iniciar sesion</h1>
            <p>Ingresa el correo de trabajo</p>
            </div>

            <div className='login_card'>

                <form className='login_form' onSubmit={onSubmitForm}>

            <div className='login_field'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" 
                placeholder='nombre@email.com'
                onChange={onChangeFieldValue} 
                value={form_state.email}/>
            </div>

            <div className='login_field'> 
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password"
                placeholder='Tu contraseña'
                onChange={onChangeFieldValue} 
                value={form_state.password}/>
            </div>

            {
                error && <span className='login_message_error'>{error.message}</span>
            }
            {
                response 
                && 
                response.ok 
                && 
                <span className='login_message_success'>
                    Usuario registrado exitosamente, te enviaremos un mail con instrucciones.
                </span>
            }

            <button type="submit" className='login_button'
            disabled={loading || (response && response.ok)}>
                {loading ? 'Iniciando sesion...' : 'Iniciar sesion'}
            </button>

        </form>
            </div>

            <div className='login_footer'>
        <span>Aun no tienes cuenta?</span>
        <Link to="/register">Registrate</Link>   
            </div>

    </div>
</div>
    )
    }

export default LoginScreen