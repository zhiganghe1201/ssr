import React from "react";
import styles from "./index.css";
import { Link } from "react-router-dom";
console.log(styles.header);

export default function index() {
  return (
    <div >
      <Link to="/">首页</Link>
      <Link to="/movies">电影列表</Link>
    </div>
  );
}
