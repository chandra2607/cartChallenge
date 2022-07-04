import React,{useContext} from 'react'
import { CartContext } from '../Cart/context'

function OrderSummaryComponent(props) {
  const {totalItems,discounts,totalQuantity,subTotal,totalAmount}=useContext(CartContext)


  const discounts1=discounts.map((discount,id)=>(
    <div key={id}>
      <div>{discount.discount_name}  -{discount.discount_amount}</div>
    </div>
  ))
  return (
    <div className='flex flex-col   gap-4'>
      <div className='text-xl font-bold'>Order Summary</div>
      <div className='flex justify-around'><span>{totalQuantity} items</span><span>{subTotal}</span></div>
    {
      discounts1&&(<div>
                    DISCOUNT 
                    {discounts1}
                  </div>)
    }
    
      <div className='flex justify-around'><span>TOTAL COST </span><span>{totalAmount}</span></div>
    </div>
  )
}

export default OrderSummaryComponent