import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Profile from './pages/Profile/Profile';
import { useSelector } from 'react-redux';
import Chat from './pages/chat/Chat';

const App = () => {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div className='App'>
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Routes>
        <Route
          path='/'
          element={
            user
              ? <Navigate to="/home" />
              : <Navigate to='/auth' />}
        />
        <Route
          path="/home"
          element={
            user
              ? <Home />
              : <Navigate to="/auth" />}
        />
        <Route
          path='/auth'
          element={
            user
              ? <Navigate to='/home' />
              : <Auth />}
        />
        <Route
          path='/profile/:id'
          element={
            user
              ? <Profile />
              : <Navigate to='/home' />}
        />

        <Route
          path='/chat'
          element={
            user
              ? <Chat />
              : <Navigate to='/auth' />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App