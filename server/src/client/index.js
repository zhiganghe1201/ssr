import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// hydrate 注水（保湿） 不要用render, hydrate 不会重新渲染， 只会加上 事件等 后续流程， 会生成虚拟DOM， 不会生成真实DOM， 因为服务端已经生成
ReactDOM.hydrate(<App />, document.getElementById('root'));
