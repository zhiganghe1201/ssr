
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './App';
import getHtml from './getHtml';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import loadData from './loadData';
import makeStore from '../store';

export default async (req, res) => {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const store = makeStore()
  // 渲染之前 执行请求数据
  const context = {}

  await loadData(req.path, store)

  const compHtml = ReactDom.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <App location={req.path} context={context} store={store} />
    </StyleContext.Provider>
  );
  const html = getHtml(compHtml, css, req.path, store)
  res.send(html);
}