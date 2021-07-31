import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/movies";

function Movie({ movies = [], loadMovies }) {
  // 如果服务器处理了数据，则什么也不做
  // 如果服务器没有处理数据，则需要加载数据
  useEffect(() => {
    // 该副作用 hook 只在客户端渲染时执行
    if (window.requestPath === '/movies') {
      console.log('不需要加载, 服务端已经请求了，因为单页面应用只会请求一次html');
    } else {
      loadMovies && loadMovies()
      console.log('加载数据了');
    }
  }, []);
  return (
    <div>
      <h1>电影列表</h1>
      <ul>
        {
          movies.map(m => (
            <li key={m._id}>{m.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

// 在组件服务端渲染之前执行的函数
Movie.loadData = async function (store) {
  await store.dispatch(fetchMovies())
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies() {
      dispatch(fetchMovies())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)