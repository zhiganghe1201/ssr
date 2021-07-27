import express from 'express';
import render from './render'

const port = 8080;
const app = express();

app.use(express.static('./public'))

app.get('*', render)

app.listen(port, () => {
  console.log('8080 服务已启动');
})