
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Nav from './components/Nav';
import SinglePost from './components/Post/SinglePost';

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <BrowserRouter>
    <Nav setShowNav={setShowNav} showNav={showNav} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/blog/:slug" element={<SinglePost />} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;
