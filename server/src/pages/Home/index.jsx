import React, { useState } from 'react';
import styles from './index.css';
import superMan from '../../assets/superMan.jpeg'

console.log(styles, 'styles');

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className={styles.color}>Hello world ssr day 1-1 {number}</div>
      <img src={superMan} alt="" />
      <div className={styles.bg}></div>
      <p style={{ background: 'red' }}>行间样式 </p>
      <button className={styles.beautybutton} onClick={() => setNumber(number + 1)}>click</button>
    </>
  )
}