import { useState } from "react"

const useForm = (
    {
        initial_form_fields,
        onSubmit
    }
) => {
    const [form_state, setFormState] = useState (initial_form_fields)

    // on changeFieldValue nos permite trackear (traer?) el valor de un campo
    const onChangeFieldValue = (event) => {
        const {name, value} = event.target

        setFormState(
            (prevFormState) => {
                return {...prevFormState, [name]: value}
            }
        )
    }

    // Para prevenir la recarga del evento submit y activar la funcion de envio

    const onSubmitForm = (event) => {
        event.preventDefault()
        onSubmit(form_state)
    }

    return{
        form_state,
        onChangeFieldValue,
        onSubmitForm
    }
}

export default useForm