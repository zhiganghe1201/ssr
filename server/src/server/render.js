
import ReactDom from 'react-dom/server';
import React from 'react';
import App from './App';
import getScript from './getScript';

export default (req, res) => {
  const compHtml = ReactDom.renderToString(<App />); // renderToString 把 React 组件编译为 字符串
  // console.log(compHtml); // 会执行两次 因为浏览器第一次访问一个页面的时候 回去请求 ./favicon.ico; 所以会请求两次。 因为是get('*') 要去配置 favicon.ico
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${compHtml}</div>
    ${getScript()}
  </body>
  </html>`

  res.send(html);
}