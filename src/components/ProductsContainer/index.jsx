import React from "react";
import s from "./index.module.css";
import ProductItem from "../ProductItem";


export default function ProductsContainer({ products }) {

  return (
    <div className={['wraper', s.container].join(' ')}>
      
      <div className={s.products_cont}>
        {
        products
        .filter(el=>el.show_item)
        .map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
