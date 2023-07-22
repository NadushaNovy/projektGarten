import React from 'react';
import s from './index.module.css';
import { getDiscount } from '../../../async_actions/request';



export default function InputDiscount() {
 const submit = e=>{
  e.preventDefault();
  const number = {
    tel_number:e.target.telehpon.value
  }
 getDiscount(number)
  e.target.reset()
 }

  return (
    <form className={s.form} onSubmit={submit} >
        <input type='numer' placeholder='+49' name='telehpon'/>
        <button>Get a discount</button>
    </form>
  )
}
