import { createStore } from 'redux';
import reducers from './reducers';


let store;
// 区分是浏览还是服务器环境  为了好调试
if (global.document) {
  store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(reducers)
}

export default store;