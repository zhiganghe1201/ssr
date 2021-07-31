import React from "react";
import styles from "./index.css";
import { Link } from "react-router-dom";
import withStyles from 'isomorphic-style-loader/withStyles'

function Index(props, context) {
  return (
    <div className={styles.header}>
      <Link to="/">首页</Link>
      <Link to="/movies">电影列表</Link>
      <Link to="/admin">后台管理</Link>
    </div>
  );
}

export default withStyles(styles)(Index)