import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <div className='bg-black w-full grid grid-rows-[7rem,1fr,6rem]'>
        <div className=' w-full h-full top-0 sticky'>
          <NavBar />
        </div>
        <div className='-mt-36 text-white lg:-mt-10'>
            <Outlet/>
        </div>
        <div className='bg-black'>
            <Footer/>
        </div>
        
      </div>
    </>
  )
}

export default Layout