import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getNameOfCategory,
  getProductsByCategory,
} from "../../async_actions/request";
import ProductsContainer from "../../components/ProductsContainer";
import s from "./index.module.css";
import ProductFiltr from "../../components/ProductFiltr";
import {
  productsWithDiscountAction,
  sortProductsAction,
  filterByPriceAction,
} from "../../store/reducers/productsByCategoriesReducer";

export default function ProductsByCategoryPage() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    dispatch(getProductsByCategory(name));
  }, []);

  const products_state = useSelector((state) => 
     state.productsByCategories.data
  );

  const title = useSelector(
    (state) => state.productsByCategories.category.title
  );

  const filterBySale = (e) =>
    dispatch(productsWithDiscountAction(e.target.checked));

  const sort = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };
  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(filterByPriceAction({ min_value, max_value }));
  };

  return (
    <div className={"wrapper"}>
      <h2 className={s.title}>{title}</h2>
      <ProductFiltr
        filterBySale={filterBySale}
        sale={false}
        sort={sort}
        filterByPrice={filterByPrice}
        handleChange={handleChange}
      />

      <ProductsContainer products={products_state} />
    </div>
  );
}
