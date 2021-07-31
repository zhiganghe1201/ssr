import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from '@/routes/RouteApp'
import '../assets/global.css'
import { Provider } from 'react-redux';
import makeStore from '../store'
import StyleContext from 'isomorphic-style-loader/StyleContext';

const store = makeStore(); // 客户端只有一个store

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}
export default function App() {
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>

  )
}