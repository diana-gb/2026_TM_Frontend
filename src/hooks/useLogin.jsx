import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import useRequest from "./useRequest"
import useForm from "./useForm"
import { login } from "../services/authService"
import { AuthContext } from "../context/AuthContext"

function useLogin (){
        const navigate = useNavigate()
        const {saveSession, isLogged, session} = useContext(AuthContext)
    
        console.log({isLogged, session})
        
        const initialLoginForm = {
        email: '',
        password: ''
    }

    function logearse(form_state){
        sendRequest(
            () => {
                return login (form_state.email, form_state.password)
            }
        )
    }

    const {onChangeFieldValue, onSubmitForm, form_state} = useForm({initial_form_fields: initialLoginForm, onSubmit: logearse})

    const {response, error, loading, sendRequest} = useRequest()


    useEffect(
        () => {
        if(response && response.ok){

            saveSession(response.data.auth_token)
            navigate('/home')
        }
    },
    [response]

    )

    return{
        form_state,
        onChangeFieldValue,
        onSubmitForm,
        loading,
        error,
        response
    }
}

export default useLogin