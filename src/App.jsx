import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-tabulator/lib/styles.css';

import './App.css'

//COMPONENTS
import { Home, Loader, Login } from './layouts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/authenticate" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
