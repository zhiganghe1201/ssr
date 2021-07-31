import express from 'express';
import render from './render';
import { createProxyMiddleware } from 'http-proxy-middleware'

const port = 8080;

// 开启一个服务器（前端服务器） 主要用来渲染页面的 public里的
const app = express();

app.use(express.static('./public'));

// 代理浏览器接口, 正常前端不可以请求到后端数据服务器， 需要 中间层代理
app.use('/api',
  createProxyMiddleware({
    target: 'http://yuanjin.tech:5005/',
    changeOrigin: true
  })
)

app.get('*', render)

app.listen(port, () => {
  console.log('8080 服务已启动');
})