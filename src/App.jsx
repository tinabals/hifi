// import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import './App.css';
// import LogIn from './components/LogIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
