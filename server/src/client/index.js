import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = document.getElementById("root")
// var renderMethod
// if (root && root.innerHTML !== "") {
//   renderMethod = ReactDOM.hydrate
// } else {
//   renderMethod = ReactDOM.render
// }
// console.log(renderMethod === ReactDOM.hydrate);

// hydrate 注水（保湿） 不要用render, hydrate 不会重新渲染， 只会加上 事件等 后续流程， 会生成虚拟DOM， 不会生成真实DOM， 因为服务端已经生成
ReactDOM.hydrate(<App />, document.getElementById('root'));
