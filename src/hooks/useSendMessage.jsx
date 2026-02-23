import { useContext } from "react"
import MessagesContext from "../context/MessagesContext"
import useForm from "./useForm"

const useSendMessage = () => {
    const { sendMessage, messages_loading, messages_error } = useContext(MessagesContext)

    const handleSubmit = async (form_state) => {
        if (!form_state.message.trim()) return

        await sendMessage(form_state.message)

        setFormState(initial_form_fields)
    }

    const initial_form_fields = {
        message: ''
    }

    const validateSchema = {
        message: (value) => {
            if (!value.trim()) return 'El mensaje no puede estar vacío'
            return null
        }
    }

    const { form_state, onChangeFieldValue, onSubmitForm, setFormState, errors } = useForm({
        initial_form_fields,
        onSubmit: handleSubmit,
        validateSchema
    })

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        errors,
        messages_loading,
        messages_error
    }
}

export default useSendMessage
