    import ICONOS from "../../../Constantes/iconos";
import "./WorkspaceItem.css";

    const WorkspaceItem = ({ workspace, navigate, handleDeleteWorkspace }) => {
    return (
        <div className="workspace_item">

            <div className="workspace_info"
            onClick={() =>
                navigate(`/workspace/${workspace.workspace_id}/channels`)
            }
            >

            <div className="workspace_avatar">
            {workspace.workspace_title[0]}
            </div>

            <span className="workspace_title">
                {workspace.workspace_title}
                </span>
            
            </div>
        
                <button
                className="workspace_delete_button"
                    onClick={(e) =>{
                        e.stopPropagation()
                        handleDeleteWorkspace(workspace.workspace_id)}
                    } 
                    >
                        <ICONOS.delete/>
                </button>
        </div>

)
}

    export default WorkspaceItem