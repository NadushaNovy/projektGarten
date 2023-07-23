import React from 'react';
import logo from './images/logo.png';
import cart from './images/cart.jpg'
import s from './index.module.css';
import { Link, NavLink } from 'react-router-dom';



export default function Header() {
    const checkClass = ({isActive})=> isActive ? s.active : '';
  return (
    <div className={['wrapper',  s.header].join(' ')}>
<div className={s.logo}>
    <img src={logo} alt="" />
    <div className={s.header_btn}>
        <Link to='/catalog'>Catalog</Link>
    </div>

</div>
<div className={s.nav_menu}>
    <div className={s.pages}>
    <NavLink to='/' className={checkClass}>Main Page</NavLink>
 <NavLink to='/products' className={checkClass}>All products</NavLink>
 <NavLink to='/sales' className={checkClass}>All sales</NavLink>
    </div>
 
<div className={s.cart}>
    <Link to='/cart'>
    <img src={cart} alt="" />
    </Link>
</div>

</div>

    </div>
  )
}
