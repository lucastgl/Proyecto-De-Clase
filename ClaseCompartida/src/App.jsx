import './App.css';
import {routes, Login, Layout} from './Navigation/Routes.js';
import { ProtectedRoutes } from './components/ProtectedRoute';
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Router } from "react-router-dom";
import NewContextProvider from './context/Context';



function App() {

  return (
    <NewContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route element={<Layout/>}>
              {
                routes.map(({id, path, Component}) => (
                  <Route key={id} path={path} element={<Component/>}/>
                ))
              }
            </Route>
          </Route>
          <Route path='/' element={<Navigate to="/login" />}/>
        </Routes>
      </BrowserRouter>
    </NewContextProvider>
  )
}

export default App
