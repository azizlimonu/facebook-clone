import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </>
  )

}

export default App;
