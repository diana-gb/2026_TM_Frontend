// LoginScreen.jsx - Tu archivo adaptado
import './login-screen.css'
import { Link } from 'react-router-dom'

// ... tu logica de useForm, onSubmitForm, etc.

return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-logo">
          {/* Tu logo SVG de Slack aqui */}
          <span className="login-logo-text">slack</span>
        </div>

        <div className="login-header">
          <h1>Iniciar sesion</h1>
          <p>Te recomendamos usar el correo del trabajo.</p>
        </div>

        <div className="login-card">
          <form className="login-form" onSubmit={onSubmitForm}>

            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email"
                placeholder="nombre@empresa.com"
                onChange={onChangeFieldValue}
                value={form_state.email} />
            </div>

            <div className="login-field">
              <label htmlFor="password">Contrasena</label>
              <input type="password" id="password" name="password"
                placeholder="Tu contrasena"
                onChange={onChangeFieldValue}
                value={form_state.password} />
            </div>

            {error && <span className="login-message-error">{error.message}</span>}
            {response && response.ok && (
              <span className="login-message-success">
                Usuario registrado exitosamente, te enviaremos un mail con instrucciones.
              </span>
            )}

            <button type="submit" className="login-button"
              disabled={loading || (response && response.ok)}>
              {loading ? "Iniciando sesion..." : "Iniciar sesion"}
            </button>

          </form>
        </div>

        <div className="login-footer">
          <span>Aun no tienes cuenta?</span>
          <Link to="/register">Registrate</Link>
        </div>

      </div>
    </div>
)