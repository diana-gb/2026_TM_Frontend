import { Link } from 'react-router'
import useCreateWorkspace from '../../hooks/useCreateWorkspace'
import './CreateWorkspaceScreen.css'

const CreateWorkspaceScreen = () => {
  const { form_state, onChangeFieldValue, onSubmitForm, errors, loading, error } = useCreateWorkspace()

  return (
    <div className="create-workspace-container">
      <div className="create-workspace-form">
        <h2>Crea un nuevo espacio de trabajo</h2>
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="title">Título del espacio de trabajo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form_state.title}
              onChange={onChangeFieldValue}
              placeholder="Ej: Proyecto Slack"
            />
            {errors.title && <span className="error-message">⚠️ {errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={form_state.description}
              onChange={onChangeFieldValue}
              placeholder="¿De qué trata este espacio?"
              rows={4}
            />
            <div className={`char-counter ${form_state.description.length > 1000 ? 'limit-reached' : ''}`}>
              {form_state.description.length} / 1000
            </div>
            {errors.description && <span className="error-message">⚠️ {errors.description}</span>}
          </div>

          <div className="form-actions">
            <Link to="/home" className="btn-secondary">Volver a la lista</Link>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creando...' : 'Crear Espacio'}
            </button>
          </div>
          {error && <span className="error-message">❌ {error.message}</span>}
        </form>
      </div>
    </div>
  )
}

export default CreateWorkspaceScreen