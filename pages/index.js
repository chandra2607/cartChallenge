import Head from 'next/head'
import Image from 'next/image'
import { CartContextProvider } from '../components/Cart/context'
import MainContainer from '../components/MainContainer'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className='h-[80vh] w-[80%] p-4  bg-white  mt-14 m-auto'>
      <CartContextProvider>
        <MainContainer />
      </CartContextProvider>
    </div>
  )
}
