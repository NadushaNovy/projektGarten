import React from 'react';
import s from './index.module.css';
import { useSelector } from 'react-redux';
import{SlArrowRight} from 'react-icons/sl'
import CartItem from '../CartItem';
import CartCalculation from '../CartCalculation';
import { Link } from 'react-router-dom';


export default function CartContainer() {
    const cart_state = useSelector(state=>state.cart);
    
  return (
    <div className={['wrapper', s.cart_container ].join(' ')}>
      <h2>Shopping cart</h2>
      <Link to='/products' className={s.back}>
      <p>Back to the store</p> 
      <SlArrowRight className={s.arrow_item} />
      </Link>
      <div className={s.flex_container}>
        <div className={s.cart}>
        {
            cart_state.map(el=><CartItem key={el.id} {...el}/>)
        }
        </div>
      {
     
        cart_state.length === 0 ? '' :    <CartCalculation cart_state={cart_state}/>
      }
      </div>
    </div>
  )
}
