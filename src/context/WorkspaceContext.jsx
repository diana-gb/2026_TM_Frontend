import { createContext, useEffect } from "react";
import useRequest from "../hooks/useRequest";
import { getWorkspaceList } from "../services/workspaceServices";

export const WorkspaceContext = createContext(
    {
        workspace_list_loading: false,
        workspace_list: null,
        workspace_list_error: null
    }
)

const WorkspaceContextProvider = ({ Children}) => {
    const {loading, response, error, sendRequest} = useRequest()

    useEffect(
        () => {
            sendRequest(
                getWorkspaceList
            )
        },
        []
    )


    const provider_value = {
        workspace_list_loading: loading,
        workspace_list: response,
        workspace_list_error: error
    }

    return (
        <WorkspaceContext.Provider 
        value={provider_value}>
            {Children}
        </WorkspaceContext.Provider>
    )
}

export default WorkspaceContextProvider