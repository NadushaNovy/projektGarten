import { loadAllProductsAction } from "../store/reducers/allProductsReducer";
import { sendOrderAction } from "../store/reducers/cartReducer";
import { loadCategoriesAction } from "../store/reducers/categoriesReducer";
import { loadNameOfCategoryAction } from "../store/reducers/nameOfCategoryReducer";
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import { loadProductsAction } from "../store/reducers/productsWithDiscountReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";
const host_link = 'http://localhost:3333'

export const getCategories = async (dispatch) => {
  const link = `${host_link}/categories/all`;
  // 'http://localhost:3333/categories/all';
  const resp = await fetch(link);
  const data = await resp.json();
  dispatch(loadCategoriesAction(data))
}

export const getProductsByCategory = (element) => {
  return dispatch =>
    fetch(`${host_link}/categories/${element}`)
      .then(res => res.json())
      .then(json => {
        const data = json.data.map(el => ({
          ...el, show_by_price: true, show_by_discount: true
        }));

        json.data = data;

        dispatch(loadProductsByCategoryAction(json.data))
      })

}
export const getNameOfCategory = (element) => {
  return dispatch =>
    fetch(`${host_link}/categories/${element}`)
      .then(res => res.json())
      .then(json =>
        dispatch(loadNameOfCategoryAction(json.category))
      )

}
export const getAllProducts = async (dispatch) => {
  const link = `${host_link}/products/all`;
  const resp = await fetch(link);
  const data = await resp.json();
  const new_data = data.map(el => ({
    ...el, show_by_price: true, show_by_discount: true
  }));
  dispatch(loadAllProductsAction(new_data))
}
export const getSalesProducts = async (dispatch) => {
  const link = `${host_link}/products/all`;
  const resp = await fetch(link);
  const data = await resp.json();
  const new_data = data
    .filter(el => el.discont_price !== null)
    .map(el => ({
      ...el, show_by_price: true, show_by_discount: true
    }));
  dispatch(loadProductsAction(new_data))
}

export const getSingleProduct = (element) => {
  return dispatch =>
    fetch(`${host_link}/products/${element}`)
      .then(res => res.json())
      .then(json =>
        dispatch(loadSingleProductAction(json))
      )

}

export const sendOrder = body => {
  return dispatch => {
    fetch(`${host_link}/order/send`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
      .then(res => res.json())
      .then(json => dispatch(sendOrderAction(json)))
      .then(alert('order is accepted'))
  }
}


export const getDiscount = body => {

  fetch(`${host_link}/sale/send`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(res => res.json())
    .then(alert('your discount is 5%'))

}


