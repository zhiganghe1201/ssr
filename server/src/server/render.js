
import ReactDom from 'react-dom/server';
import React from 'react';
import App from './App';
import getHtml from './getHtml';

export default (req, res) => {
  const context = {}
  const compHtml = ReactDom.renderToString(<App location={req.path} context={context} />); // renderToString 把 React 组件编译为 字符串
  // console.log(compHtml); // 会执行两次 因为浏览器第一次访问一个页面的时候 回去请求 ./favicon.ico; 所以会请求两次。 因为是get('*') 要去配置 favicon.ico
  const html = getHtml(compHtml)
  res.send(html);
}