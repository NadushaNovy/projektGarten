import React from "react";
import s from './index.module.css';
import { Link } from "react-router-dom";



export default function CategoryItem({id,title, image }) {
  return (
    <Link to={`/catalog/${id}`} className={s.item}>
      <img src={`http://localhost:3333/${image}`} alt={title} />

      <p>{title}</p>
    </Link>
  );
}
