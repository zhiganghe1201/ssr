import { matchRoutes } from 'react-router-config';
import routesConfig from "../routes/routesConfig";

/**
 * 负责服务器渲染前的加载
 */
export default function (path, store) {
  const matches = matchRoutes(routesConfig, path);
  const promiseArr = [];

  for (const match of matches) {
    if (match.route.component.loadData) {
      promiseArr.push(Promise.resolve(match.route.component.loadData(store)))
    }
  }
  return Promise.all(promiseArr)
}