import React, { useContext } from 'react'
import { WorkspaceContext } from '../../context/WorkSpaceContext'
import { Link, useNavigate } from "react-router-dom";
import SlackLogo from '../../componentes/SlackLogo/SlackLogo';

const HomeScreen = () => {

    const navigate = useNavigate()
    const{workspace_list_loading, workspace_list_error, workspace_list } = useContext(WorkspaceContext)
    
    console.log(workspace_list)

    
        if( workspace_list_loading || !workspace_list ){
            return <SlackLogo/>
        }

    return (

        <div>
            
            <h1>Bienvenido </h1>
            {
                workspace_list_error && <span>{workspace_list_error.message}</span>
            }
            {
                workspace_list.data.workspaces && workspace_list.data.workspaces.length > 0 && workspace_list.data.workspaces.map(
                    workspace => <div key={workspace.workspace_id} onClick={() => navigate(`/workspace/${workspace.workspace_id}/channels`)}>{workspace.workspace_title}</div>
                )
            }
            {
                workspace_list.data.workspaces && workspace_list.data.workspaces.length === 0 && <span>No tienes espacios de trabajo</span>
            }
            <Link to='/create-workspace'>Agregar un espacio de trabajo nuevo</Link>
        </div>
    )
}

export default HomeScreen