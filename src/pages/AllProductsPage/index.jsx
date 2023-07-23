import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../async_actions/request';
import ProductsContainer from '../../components/ProductsContainer';
import s from "./index.module.css";
import ProductFiltr from '../../components/ProductFiltr';
import { allProductsWithDiscountAction, filterByPriceAction, sortProductsAction } from '../../store/reducers/allProductsReducer';


export default function AllProductsPage() {
  const dispatch = useDispatch();
  const [checked,setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

 useEffect(()=>{
dispatch(getAllProducts)
    },[]);
 
    const all_products_state = useSelector(state=>state.allProducts);

    const filterBySale = (e)=>dispatch(allProductsWithDiscountAction(e.target.checked));


    const filterByPrice = (e)=>{
      e.preventDefault();
      const {min_price,max_price} = e.target.parentElement;
      const min_value = min_price.value || 0;
      const max_value = max_price.value ||  Infinity;
      dispatch(filterByPriceAction({min_value,max_value}))
    }
    

    const sort = (e)=>{
      dispatch(sortProductsAction(e.target.value))
    }
  return (
    <div className={ ['wrapper', s.container].join(' ')}>
      <h2>All Products</h2>
      <ProductFiltr 
       filterBySale={filterBySale}
       filterByPrice={filterByPrice}
       sort = {sort}
       sale = {false}
       handleChange = {handleChange}
       />
      <ProductsContainer products = {all_products_state}/>

    </div>
  )
}
