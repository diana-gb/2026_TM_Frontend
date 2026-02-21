import react from 'react'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import { Route, Routes } from 'react-router'
import RegisterScreen from './Screens/RegisterSceen/RegisterScreen'
import AuthContextProvider from './context/AuthContext'
import AuthMiddlewares from './Middlewares/AuthMiddlewares'
import WorkspaceContextProvider from './context/WorkSpaceContext'
import CreateWorkspaceScreen from './Screens/CreateWorkspaceSceen/CreateWorkspaceScreen'
import HomeScreen from './Screens/HomeSreen/HomeScreen'
import ChannelScreen from './Screens/ChannelScreen/ChannelScreen'
import ChannelContextProvider from './context/ChannelContextProvider'
import MessagesContextProvider from './context/MessagesContextProvider'
import MessageScreen from './Screens/MessageScreen/MessageScreen'

function App() {


  return (

    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route element={<AuthMiddlewares />}>
          <Route path='/home' element={
            <WorkspaceContextProvider>
              <HomeScreen />
            </WorkspaceContextProvider>
          } />
          <Route path='/create-workspace' element={<CreateWorkspaceScreen />} />
          <Route path='/workspace/:workspace_id/channels' element={
            <ChannelContextProvider>
              <ChannelScreen/>
            </ChannelContextProvider>
            }/>
            <Route path='/workspace/:workspace_id/channels/:channel_id/messages' element={
              <MessagesContextProvider>
                <MessageScreen/>
              </MessagesContextProvider>
            }/>
        </Route>
      </Routes>
    </AuthContextProvider>
  )
}

export default App
