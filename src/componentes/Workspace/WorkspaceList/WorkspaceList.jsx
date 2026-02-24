    import "./WorkspaceList.css";
    import WorkspaceItem from "../WorkspaceItem/WorkspaceItem"

    const WorkspaceList = ({
    workspace_list,
    workspace_list_error,
    navigate,
    }) => {
    return (
        <div className="workspace_list">

        {workspace_list_error && (
            <span className="error">
            {workspace_list_error.message}
            </span>
        )}

        {workspace_list.data.workspaces &&
            workspace_list.data.workspaces.length > 0 &&
            workspace_list.data.workspaces.map((workspace) => (
            <WorkspaceItem
                key={workspace.workspace_id}
                workspace={workspace}
                navigate={navigate}
            />
            ))}

        {workspace_list.data.workspaces &&
            workspace_list.data.workspaces.length === 0 && (
            <span className="empty">
                No tienes espacios de trabajo
            </span>
            )}
        </div>
    )
}

    export default WorkspaceList