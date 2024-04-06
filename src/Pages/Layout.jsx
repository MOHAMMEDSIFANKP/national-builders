import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <div className='bg-black w-full grid grid-rows-[rem,1fr,6rem]'>
        <div className=' w-full h-full z-10 top-0 sticky'>
          <NavBar />
        </div>
        <div className='bg-black text-white'>
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