import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import MyNav from './components/Navbar';
import List from './pages/List';
import Home from './pages/Home';
import About from './pages/About';
import Showpage from './pages/Showpage';
import Intro from './pages/Intro';

function App() {
  return (
    <div>
      <MyNav />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/book/list" element={<ProtectedRoute><List /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/show" element={<ProtectedRoute><Showpage/></ProtectedRoute>} />
        
      </Routes>
    </div>
  );
}

export default App;
