import { ServerError } from "../utils/errorUtils"

const URL_API = import.meta.env.VITE_API_URL
export async function getMessages (workspace_id, channel_id){

    const http_response = await fetch(
        `${URL_API}/api/workspace/${workspace_id}/channels/${channel_id}/messages`,
    {
        method: 'GET',
        headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
            'Authorization' : 'Bearer ' + localStorage.getItem('auth_token'),
        }
    }
    )

    const response = await http_response.json()
    if(!response.ok){
        throw new ServerError (response.message, response.status)
    }

    return response

}

export async function sendMessage (workspace_id, channel_id, content){

    const http_response = await fetch(
        `${URL_API}/api/workspace/${workspace_id}/channels/${channel_id}/messages`,
                {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_API_KEY,
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('auth_token'),
            },
            body: JSON.stringify({content})
        }
    )

    const response = await http_response.json()
    if (!http_response.ok) {
        throw new ServerError(response.message, http_response.status)
    }

    return response
    
}