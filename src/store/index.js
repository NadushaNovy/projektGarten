import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productByCategoriesReducer } from './reducers/productsByCategoriesReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { productsWithDiscountReducer } from './reducers/productsWithDiscountReducer';
import { nameOfCategoryReducer } from './reducers/nameOfCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
   catalog:categoriesReducer,
   productsByCategories:productByCategoriesReducer,
   allProducts:allProductsReducer,
   productsWithdiscount:productsWithDiscountReducer,
   nameOfCategory:nameOfCategoryReducer,
   singleProduct: singleProductReducer,
   cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


