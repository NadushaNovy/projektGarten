import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../async_actions/request';
import CategoriesContainer from '../../components/CategoriesContainer';
import s from './index.module.css';


export default function CatalogPage() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.catalog);
    useEffect(()=>{
        dispatch(getCategories);
    },[])

  return (
    <div className={ ['wrapper', s.container].join(' ')}>
      <h2>Categories</h2>
      <CategoriesContainer categories={categories}/>
    </div>
  )
}
