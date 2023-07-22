import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';



export default function Promotion() {
  return (
    <div className={s.promo}>
        <div className={s.info}>
        <h1>Sale</h1>
        <h3>New season</h3>
        <Link to='/sales' className={s.button}>Sale</Link>
        </div>
        <div className={s.image}>
            
        </div>
     
    </div>
  )
}
