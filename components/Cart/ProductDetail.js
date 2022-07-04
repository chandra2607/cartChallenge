 import React from 'react'
import Image from 'next/image'

function ProductDetail(props) {
    console.log(props)
  return (
    <div className='h-full w-full top-0 absolute bg-red-700 z-10 '>
        <Image src={props.image} alt="" height="400"  width="400" />
    </div>
  )
}

export default ProductDetail