import "./WorkspaceLayout.css";

const WorkspaceLayout = ({ children }) => {
    return (
        <div className="workspace_layout">
{/*         <div className="workspace_sidebar">
            <div className="workspace_logo">S</div> 
        </div>
 */}
        <div className="workspace_content">
            {children}
        </div>
        </div>
    )
    }

export default WorkspaceLayout;