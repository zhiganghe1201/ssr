import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from '@/routes/RouteApp'
import '../assets/global.css'
import { Provider } from 'react-redux';
import store from '../store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>

  )
}