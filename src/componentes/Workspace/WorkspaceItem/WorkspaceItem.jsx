    import "./WorkspaceItem.css";

    const WorkspaceItem = ({ workspace, navigate }) => {
    return (
        <div
        className="workspace_item"
        onClick={() =>
            navigate(`/workspace/${workspace.workspace_id}/channels`)
        }
        >
        <div className="workspace_avatar">
            {workspace.workspace_title[0]}
        </div>

        <span>{workspace.workspace_title}</span>
        </div>
    )
}

    export default WorkspaceItem