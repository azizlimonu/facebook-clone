import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <div className='App'>
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App