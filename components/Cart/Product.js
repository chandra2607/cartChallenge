import Image from  'next/image'
import React, { useEffect, useState,useContext } from 'react'
import {CartContext} from './context'
import ProductDetail from './ProductDetail'
function Product(props) {
  const [quantity,setQuantity]=useState(props.quantity)
  const {totalItems,setTotalItems}=useContext(CartContext)
  const [showDetail,setShowDetail]=useState(false);
  const total=props.price*quantity 
  const handleDecrement=()=>{
    if(quantity>1){
      setQuantity(prev=>prev-1)
    }
  }
  const handleIncrement=()=>{
    setQuantity(prev=>prev+1)
  }
  useEffect(()=>{
    setTotalItems(prev=>{
      const found=prev.find(item=>item.itemcode===props.code)
      if(found){
       return [...prev.filter(item=>item.itemcode!==props.code),{itemcode:props.code,quantity:quantity,price:total}]
      }
      return [...prev,{itemcode:props.code,quantity:quantity,price:total}]
      
    })
  },[quantity])

  return (
    <>
    {
     showDetail&&(<ProductDetail {...props} />)
    } 
    <div className='flex justify-around items-center  mb-10 ' >
    <div className='flex'>
      <Image  src={props.thumb} alt=""  onClick={()=>setShowDetail(prev=>!prev)}/>
      <div className='flex-col flex justify-center items-center'>
       <span className='text-xl text-orange-500'>
         {props.name}
        </span>
        <span>Product Code {props.internalCode}</span>
      </div>
    </div>
    <div className='flex w-[60px] cursor-pointer gap-1 leading-none'> 
      <div className='text-3xl text-green-800 ' onClick={handleDecrement}>-</div>
      <input type='text' onChange={(e)=>setQuantity(e.target.value)} className='w-[40px] border-[1px] border-gray-400 p-1 text-center m-auto h-full ' value={quantity}  />
      <div className='text-3xl text-green-800 '  onClick={handleIncrement}>+</div>
    </div>
    <div> {props.price}</div>
    <div>{total} </div>
  </div>
    </>
  )
}

export default Product