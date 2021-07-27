import React, { useState } from 'react';
import style from './index.css';


console.log(style, 'sdsd');

export default function () {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>Hello world ssr day 1-1 {number}</h1>
      <button className={style.buautybutton} onClick={() => setNumber(number + 1)}>click</button>
    </>
  )
}