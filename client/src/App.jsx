import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Combine from "./combine"
import Login from './components//Login'
import Dashboard from './components//Dashboard'
import PrivateRoute from "./components/PrivateRoute";

function App() {


  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Combine />} />
        <Route exact path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
