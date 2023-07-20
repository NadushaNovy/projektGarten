import { loadAllProductsAction } from "../store/reducers/allProductsReducer";
import { sendOrderAction } from "../store/reducers/cartReducer";
import { loadCategoriesAction } from "../store/reducers/categoriesReducer";
import { loadNameOfCategoryAction } from "../store/reducers/nameOfCategoryReducer";
import { loadProductsByCategoriesAction } from "../store/reducers/productsByCategoriesReducer";
import { loadProductsAction } from "../store/reducers/productsWithDiscountReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getCategories = async (dispatch)=>{
    const link = 'http://localhost:3333/categories/all';
    const resp = await fetch(link);
    const data = await resp.json();
    dispatch(loadCategoriesAction(data))
}

export const getProductsByCategories =  (element) =>{
    return dispatch=>
    fetch(`http://localhost:3333/categories/${element}`)
  .then(res =>  res.json())
  .then(json => { 
   const data =  json.data.map(el =>({
    ...el, show_item:true
 }));

json.data = data;

dispatch(loadProductsByCategoriesAction(json.data))
  })

  }
  export const getNameOfCategory =  (element) =>{
    return dispatch=>
    fetch(`http://localhost:3333/categories/${element}`)
  .then(res =>  res.json())
  .then(json =>
dispatch(loadNameOfCategoryAction(json.category))
  )

  }
  export const getAllProducts =async (dispatch)=>{
    const link = 'http://localhost:3333/products/all';
    const resp = await fetch(link);
    const data = await resp.json();
    const new_data = data.map(el=>({
      ...el,show_item:true
    }));
    dispatch(loadAllProductsAction(new_data))
}
export const getSalesProducts =async (dispatch)=>{
  const link = 'http://localhost:3333/products/all';
  const resp = await fetch(link);
  const data = await resp.json();
  const new_data = data
  .filter(el=>el.discont_price !==null)
  .map(el=>({
    ...el,show_item:true
  }));
  dispatch(loadProductsAction(new_data))
}

export const getSingleProduct =  (element) =>{
  return dispatch=>
  fetch(`http://localhost:3333/products/${element}`)
.then(res =>  res.json())
.then(json => 
dispatch(loadSingleProductAction(json))
)

}

export const sendOrder = body =>{
  return dispatch=>{
      fetch('http://localhost:3333/order/send',{
         method:'POST',
         body:JSON.stringify(body),
         headers: { 
          'Content-Type': 'application/json;charset=utf-8' 
        }
      })
      .then(res => res.json())
      .then(json =>dispatch(sendOrderAction(json)))
  }
}

 export const getDiscount = async (data = {}) => {
  const response = await fetch('http://localhost:3333/sale/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); 
}