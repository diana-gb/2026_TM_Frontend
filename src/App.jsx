import react from 'react'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import { Route, Routes } from 'react-router'
import RegisterScreen from './Screens/RegisterSceen/RegisterScreen'
import AuthContextProvider from './context/AuthContext'
import AuthMiddlewares from './Middlewares/AuthMiddlewares'
import WorkspaceContextProvider from './context/WorkSpaceContext'
import HomeScreen from './Screens/HomeSreen/HomeScreen'



function App() {


  return (

    <AuthContextProvider>
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route element={<AuthMiddlewares/>}>
          <Route path='/home' element={
            <WorkspaceContextProvider>
              <HomeScreen/>
            </WorkspaceContextProvider>
          }/>
        
      </Route>
    </Routes>
    </AuthContextProvider>
  )
}

export default App
