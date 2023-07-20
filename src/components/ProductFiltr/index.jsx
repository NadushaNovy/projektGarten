
import s from "./index.module.css";




export default function ProductFiltr({filterBySale,sort,filterByPrice,sale}) {
  

 
  return (
    
        <div className={s.filtr_sort}>
        <div className={s.filtr}>
          <p>Price</p>
          <form className={s.filtr_price}
          >
           
            <input type="number" placeholder="from" name="min_price" 
            onChange={filterByPrice}
          />
          <input type="number" placeholder="to" name="max_price" 
          onChange={filterByPrice}
     
/>

              
          </form>
         
        </div>
        {
          sale ? '' :
          <div className={s.sale}>
          <p>Discounted items</p>
          <input type="checkbox" name="checkbox"
          onChange={filterBySale} />
        </div>
        }
        
        <div className={s.sort}>
          <p>Sorted</p>
          <select  name="name" onChange={sort}>
            <option value='default'>by default</option>
            <option value='1'>min price</option>
            <option value='2'>max price</option>
            <option value='3'>by name</option>

          </select>
        </div>
      </div>
   
  )
}
