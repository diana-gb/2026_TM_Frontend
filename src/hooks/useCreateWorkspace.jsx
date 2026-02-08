import { useNavigate } from "react-router"
import useRequest from "./useRequest"
import { createWorkspace as createWorkspaceService } from "../services/workspaceServices"
import useForm from "./useForm"

const useCreateWorkspace = () => {
    const navigate = useNavigate()
    const { loading, error, sendRequest } = useRequest()

    const createWorkspace = async (workspaceData) => {
        await sendRequest(async () => {
            await createWorkspaceService(workspaceData)
            navigate('/home')
        })
    }

    const initial_form_fields = {
        title: '',
        description: ''
    }

    const validateSchema = {
        title: (value) => {
            if (!value) return 'El título es obligatorio'
            return null
        },
        description: (value) => {
            if (!value) return 'La descripción es obligatoria'
            if (value.length > 1000) return 'La descripción no puede superar los 1000 caracteres'
            return null
        }
    }

    const { form_state, onChangeFieldValue, onSubmitForm, errors } = useForm({
        initial_form_fields,
        onSubmit: createWorkspace,
        validateSchema
    })

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        errors,
        loading,
        error
    }
}

export default useCreateWorkspace
