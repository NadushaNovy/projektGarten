import React, { useEffect } from 'react';
import s from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getSalesProducts } from '../../async_actions/request';
import ProductsContainer from '../../components/ProductsContainer';
import ProductFiltr from '../../components/ProductFiltr';
import { filterByPriceAction,sortProductsAction } from '../../store/reducers/productsWithDiscountReducer';



export default function AllSallesPage() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSalesProducts)
  },[])
  const products = useSelector(state =>state.productsWithdiscount
    
    );

    
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
    <div className={'wrapper'}>
    <h2 className={s.title}>Products with sale</h2>
    <ProductFiltr
  sale = {true}
  filterByPrice ={filterByPrice}
  sort ={sort}
    />
    <ProductsContainer products={products}/>
    
    </div>
  )
}
