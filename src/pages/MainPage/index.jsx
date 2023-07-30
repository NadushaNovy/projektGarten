import React, { useEffect } from "react";
import Promotion from "../../components/Promotion";
import Discount from "../../components/Discount";
import CategoriesContainer from "../../components/CategoriesContainer";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getSalesProducts } from "../../async_actions/request";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import ProductsContainer from "../../components/ProductsContainer";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories);
    dispatch(getSalesProducts);
  }, []);
  const categories_state = useSelector((state) => state.catalog);

  const categories = categories_state.filter(({ id }) => id <= 4);

  const salesProducts = useSelector((state) => state.productsWithdiscount);

  const getRandom = () =>
    Math.round(Math.random() * (salesProducts.length - 1));

  const randomState = salesProducts
    .map((el) => ({ ...el, random: getRandom() }))
    .sort((a, b) => a.random - b.random)
    .filter((el, i) => i < 3);

  return (
    <div>
      <Promotion />
      <div className={"wrapper"}>
        <div className={s.header}>
          <h2>Catalog</h2>
          <Link to="/catalog" className={s.btn}>
            All categories{" "}
          </Link>
        </div>
        <CategoriesContainer categories={categories} />
      </div>
      <Discount />
      <div className={["wrapper", s.sale].join(" ")}>
        <Link to="/sales">Sale</Link>
        <ProductsContainer products={randomState} />
      </div>
    </div>
  );
}
