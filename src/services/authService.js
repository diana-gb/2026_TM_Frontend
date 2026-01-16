/* Estos archivos son para centralizar la configuracion y llamada a servicios externos de nuetro front end
por ejemplo pueden ser:
- API INTERNA
- API EXTERNA
- Libreria que necesite una configuracion
*/

import { ServerError } from "../utils/errorUtils"

/* 
fetch es una funcion que nos permite hacer peticiones HTTP a un servidor (osea interactuar con el servidor)
se lo usa entre otrass cosas para comunicarnos con API (servidor HTTP 'LO QUE ESTAMOS HACIENDO CON EXPRESS')
En criollo es la forma de interactuar con el backend y se puede comparar con hacer una solicitud http desde postman

fetch recibe dos parametos:
- URL de consulta
- un objeto de configuracion
 */

const URL_API = import.meta.env.VITE_API_URL //'http://localhost:8080'

export async function login (email, password) {
    const response_http = await fetch(
        URL_API + '/api/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    password: password,
                    email: email
                }
            )
        }
    )
    const response = await response_http.json()
    if (!response.ok) {
        throw new ServerError(response.message, response.status)
    }
    return response
}

export async function register (username, password, email) {

        const response_http = await fetch(
            URL_API + '/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Configuramos que voy a enviar json en la peticion
                },
                body: JSON.stringify( //json.stringify transforma un objeto a JSON en formato string
                    {
                        username: username,
                        password: password,
                        email: email
                    }
                )
            }
        )
    
        //Transformar la respuesta HTTP para obtener los datos que nos envio por body el servidor
        // Como el servidor envia JSON debemos tomar la response como json (.json())
    
        const response = await response_http.json()
        if(!response.ok){
            throw new ServerError(response.message, response.status)
        }
        return response

}

/*
response body example:
{
    "message": "Usuario creado exitosamente",
    "status": 201,
    "ok": true,
    "data": null
}
*/

