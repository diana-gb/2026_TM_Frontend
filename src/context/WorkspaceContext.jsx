import { createContext, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { deleteWorkspace, getWorkspaceList } from "../services/workspaceServices";

export const WorkspaceContext = createContext(
    {
        workspace_list_loading: false,
        workspace_list: null,
        workspace_list_error: null
    }
)

const WorkspaceContextProvider = ({ children}) => {
    const {loading, response, error, sendRequest} = useRequest()

    useEffect(
        () => {
            sendRequest(
                getWorkspaceList
            )
        },
        []
    )

const handleDeleteWorkspace = async (workspace_id) => {
    try {
        await deleteWorkspace(workspace_id)

        sendRequest(getWorkspaceList)

    } catch (error) {
        console.log(error)
    }
}

    const provider_value = {
        workspace_list_loading: loading,
        workspace_list: response,
        workspace_list_error: error,
        handleDeleteWorkspace
    }

    return (
        <WorkspaceContext.Provider 
        value={provider_value}>
            {children}
        </WorkspaceContext.Provider>
    )
}

export default WorkspaceContextProvider