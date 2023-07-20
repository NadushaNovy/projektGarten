import React from 'react'
import CategoryItem from '../CategoryItem';
import s from './index.module.css';


export default function CategoriesContainer({categories}) {
  return (
    <div className={['wraper', s.container].join(' ') }>
        {
            categories.map(item=><CategoryItem key={item.id} {...item}/>)
        }
    </div>
  )
}
