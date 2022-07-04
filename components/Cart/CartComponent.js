import React from 'react'
import Image from  'next/image'
import Product from './Product'
// import  {imgTshirtThumb,imgCapThumb,imgSkirtThumb,imgTshirt,imgCap,imgSkirt,iconClose,iconTrash} from '../ExportImages'



function CartComponent(props) {
  
  const products=props.products.map((product,id)=>(
      <Product key={id} {...product} />
  ))

  return (
    <div className='flex-1 flex flex-col bg-gray-100 '>
      <div className='flex text-gray-400 mb-5 justify-around text-sm'><span>PRODUCT DETAILS</span><span>QUANTITY</span><span>PRICE</span><span>TOTAL</span></div>
      {products}
    </div>
  )
}

export default CartComponent