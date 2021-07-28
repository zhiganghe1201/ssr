import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Home from '@/pages/Home';
import RouteApp from '@/routes/RouteApp'
import '../assets/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  )
}