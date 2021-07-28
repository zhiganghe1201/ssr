import fs from 'fs';
import path from 'path'

/**
 * 
 * @returns 处理打包生成文件带有 hash 值
 */
export default function () {
  return fs.readdirSync(path.resolve(__dirname, '../public/css')).filter(file => file.endsWith('.css')).map(file => `<link rel="stylesheet" href="./css/${file}"></link>`).join('\n')
}