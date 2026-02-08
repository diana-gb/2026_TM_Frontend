import { useState } from "react"

const useForm = (
    {
        initial_form_fields,
        onSubmit,
        validateSchema
    }
) => {
    const [form_state, setFormState] = useState(initial_form_fields)
    const [errors, setErrors] = useState({})

    // on changeFieldValue nos permite trackear (traer?) el valor de un campo
    const onChangeFieldValue = (event) => {
        const { name, value } = event.target

        setFormState(
            (prevFormState) => {
                return { ...prevFormState, [name]: value }
            }
        )
        if (validateSchema) {
            const error = validateSchema[name] ? validateSchema[name](value) : null
            setErrors((prevErrors) => {
                return { ...prevErrors, [name]: error }
            })
        }
    }

    // Para prevenir la recarga del evento submit y activar la funcion de envio

    const onSubmitForm = (event) => {
        event.preventDefault()
        let hasErrors = false
        if (validateSchema) {
            const newErrors = {}
            for (const field in form_state) {
                const error = validateSchema[field] ? validateSchema[field](form_state[field]) : null
                if (error) {
                    hasErrors = true
                    newErrors[field] = error
                }
            }
            setErrors(newErrors)
        }
        if (!hasErrors) {
            onSubmit(form_state)
        }
    }

    return {
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        errors
    }
}

export default useForm