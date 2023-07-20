import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../async_actions/request';
import SingleProduct from '../../components/SingelProdukt';

export default function SingleProductPage() {
    const {productId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSingleProduct(productId))
    },[])
    const product = useSelector(state=>state.singleProduct)
   
  return (
    <div>
       
        {
            product.map(item=><SingleProduct key={item.id} {...item}/>)
        }
    </div>
  )
}
