import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/contact.jsx'
import Services from './pages/services.jsx'
import Dynamic from './pages/dynamic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collection/:id" element={<Dynamic />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
