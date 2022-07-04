import React from 'react'
import CartComponent from './Cart/CartComponent'
import OrderSummaryComponent from './Order/OrderSummaryComponent'
import {initialData} from './Data'

function MainContainer() {
  return (
    <div className='flex relative '>
          <CartComponent products={initialData.products} />
          <OrderSummaryComponent discounts={initialData.discounts} 
                      total_items={initialData.itemsQuantity} 
                      sub_total={initialData.subTotalCost} 
                      total_cost={initialData.totalCost} />
    </div>
  )
}

export default MainContainer