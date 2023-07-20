import React from 'react';
import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../async_actions/request';


export default function CartCalculation({cart_state}) {
    // const dispatch = useDispatch();
    // const send_order = e=>{
    //     e.preventDefoult();
    //     const {phone_number} = e.target;
    //     dispatch(sendOrder(phone_number.value))
    // }
const totalPrice = cart_state.reduce((acc,{price,discont_price,count})=> acc + count* (discont_price || price),0)

  return (
  
    <div className={s.container}>
        
        <h3>Order details</h3>
        <div className={s.total_price}>
            <p>Total</p>
            <div>
            <p>{totalPrice}</p>
             <p>$</p>
            </div>
        </div>
        <form className={s.form}>
            <input type="text" name="phone_number" placeholder='Phone number' />
            <button>Order</button>
        </form>
    </div>
  )
}