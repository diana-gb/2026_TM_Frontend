import { useState } from "react"

/* 
Este hook tiene la responsabilidad de manejar las consultas
Particularmente maneja el estado de consulta que siempre suele ser el mismo (error, response, loading)
*/
function useRequest () {
    const [loading, setLoading] = useState (false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState (null)
    async function sendRequest (request){
        try{
            setLoading(true)
            const response = await request() // Aca request actua como callback
            setResponse(response)
        }

    catch (error){
        setError(error)
    }

    finally{
        setLoading(false)
    }
}

    return{
        loading,
        response,
        error,
        sendRequest
    }
}

export default useRequest