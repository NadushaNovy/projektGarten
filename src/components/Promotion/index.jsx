import React from 'react';
import s from './index.module.css';



export default function Promotion() {
  return (
    <div className={s.promo}>
        <div className={s.info}>
        <h1>Sale</h1>
        <h3>New season</h3>
        <button className={s.button}>Sale</button>
        </div>
        <div className={s.image}>
            
        </div>
     
    </div>
  )
}
