import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import ProtectedRoutes from "./routes/ProtectedRoutes";

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element=
                {<ProtectedRoutes> <Home/> </ProtectedRoutes>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter