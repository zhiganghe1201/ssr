import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

function makeStore() {
  let store;
  // 区分是浏览还是服务器环境  为了好调试
  if (global.document) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(
      reducers,
      window.pageDatas, // 仓库的初始值 为服务器 脱水的值
      composeEnhancers(
        applyMiddleware(thunk)
      )
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    store = createStore(reducers, applyMiddleware(thunk))
  }
  return store;
}

// 解决服务端数据产库共享的问题， 每次请求页面都返回一个新的store
export default makeStore;