import React from 'react';
import s from './index.module.css';
import { getDiscount } from '../../../async_actions/request';


export default function InputDiscount() {
  // const sale = e =>{
  //   const number = e.target.telefon.value;
  //   getDiscount({number})
  //   .then((data) => {
  //     console.log(data); 
  //   });
  // }
  return (
    <form className={s.form} >
        <input type='numer' placeholder='+49' name='telefon'/>
        <button>Get a discount</button>
    </form>
  )
}
