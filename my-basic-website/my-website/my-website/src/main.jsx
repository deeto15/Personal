import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/about/index.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Posts from './pages/posts/index.jsx'
import Navbar from './components/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </BrowserRouter>
)
