// import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import './App.css';
// import LogIn from './components/LogIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
