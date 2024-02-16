import React, { useContext } from 'react'
import './css/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">

      </div>
    </div>
  )
}

export default ShopCategory
