import { createContext,useEffect,useState } from "react";

export const CartContext=createContext(null);


export const CartContextProvider =(props)=>{
    const [totalItems,setTotalItems]=useState([]);
    const [discounts,setDiscounts]=useState([])
   
    const totalQuantity=totalItems.reduce((acc,curr)=>{
          return acc+curr.quantity
      },0)
   
      const subTotal=totalItems.reduce((acc,curr)=>{
          return acc+curr.price
      },0)
        
    const allDiscounts=discounts.reduce((acc,curr)=>{ return acc+curr.discount_amount },0)
    
    const totalAmount=subTotal-allDiscounts;

      useEffect(()=>{

        const res=totalItems.reduce((acc,curr)=>{
            if(curr.itemcode==='TSHIRT' ){
                //calculate discount 5%
              const  discount_tshirt=((curr.price*5)/100)
              if( curr.quantity<3){
                return acc.filter(disc=>disc.discount_name!=='x3 Shirt offer')
            }
              return [...acc,{discount_name: 'x3 Shirt offer',discount_amount:discount_tshirt}]
            }else if(curr.itemcode==='SKIRT'  && curr.quantity>=2){
                let discount_skirt=0
                if(curr.quantity%2==0){
                    discount_skirt=(curr.price/2)
                }else{
                    discount_skirt=(curr.price/curr.quantity)*(Math.floor(curr.quantity/2))
                }
                if( curr.quantity<2){
                    return acc.filter(disc=>disc.discount_name!=='2x1 Skirt offer')
                }
                return [...acc,{discount_name:'2x1 Skirt offer',discount_amount:discount_skirt}]
            }
            else{
                return acc
            }
       },[])
    
       
       setDiscounts(res)

    },[totalItems])

    return (
        <CartContext.Provider value={{totalItems,setTotalItems,discounts,totalQuantity,subTotal,totalAmount}}>
                {props.children}
        </CartContext.Provider>
    )
}