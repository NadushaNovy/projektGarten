import React from 'react';
import s from './index.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cartReducer';


export default function ProductItem({id,title,image,price,discont_price}) {
  
  const discount = Math.round(100-(discont_price/price*100));
  const dispatch = useDispatch();

  const add_to_cart = e=>{
    e.preventDefault()
    dispatch(addToCartAction({id,title,price,discont_price,image}));
   
  }
  return (
    <Link to={`/product/${id}`}  className={s.item}>
      <div className={s.image}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
        <div 
        className={s.add_btn}
        onClick={add_to_cart}
        >Add to cart</div>
      </div>
    
        <div>
            {
                discont_price === null ?
                 <div className={s.price}>
                  <p>{price}</p>
                  <p>$</p>
                  </div> 
                : <div  className={s.price_with_discount}>
                 <div className={s.price}>
                  <p>{discont_price}</p>
                  <p>$</p>
                  </div>
                <p className={s.old_price}>{price}$</p>
                <p className={s.sale_value}>{discount}%</p>
                </div>
            }
           
        </div>
        <p className={s.name}>{title}</p>
    </Link>
  )
}
