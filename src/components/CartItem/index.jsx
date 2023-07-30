import React from "react";
import s from "./index.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  cartDecrAction,
  cartIncrAction,
  removeCartAction,
} from "../../store/reducers/cartReducer";

export default function CartItem({
  id,
  title,
  price,
  discont_price,
  image,
  count,
}) {
  const dispatch = useDispatch();
  return (
    <div className={s.cart}>
      <RxCross2
        className={s.cross_delete}
        onClick={() => dispatch(removeCartAction(id))}
      />
      <div className={s.product_info}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <div className={s.product_name}>
          <p>{title}</p>
          <div className={s.counter}>
            <AiOutlineMinus
              className={s.icons}
              onClick={() => dispatch(cartDecrAction(id))}
            />
            <p>{count}</p>
            <AiOutlinePlus
              className={s.icons}
              onClick={() => dispatch(cartIncrAction(id))}
            />
          </div>
        </div>
      </div>
      <div className={s.price}>
        {discont_price === null ? (
          <div className={s.real_price}>
            <p>{price}</p>
            <p>$</p>
          </div>
        ) : (
          <div className={s.price_with_discount}>
            <div className={s.real_price}>
              <p>{discont_price}</p>
              <p>$</p>
            </div>
            <p className={s.discount_price}>{price}$</p>
          </div>
        )}
      </div>
    </div>
  );
}
