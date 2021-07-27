import fs from 'fs';
import path from 'path'

/**
 * 
 * @returns 处理打包生成文件带有 hash 值
 */
export default function () {
  return fs.readdirSync(path.resolve(__dirname, '../public/js')).filter(file => file.endsWith('.js')).map(file => `<script src="./js/${file}"></script>`).join('\n')
}