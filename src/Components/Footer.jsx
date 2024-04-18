import React from 'react'
import Logo from '../assets/Logo/Logo.svg'
import BgImage from '../assets/Footer/bgimage.svg'
import Accolades_logo from '../assets/Footer/national_builders.svg'
import { Card } from '@material-tailwind/react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className='block lg:hidden'>
        {/* <div className='grid grid-rows-4 text-white'>
          <div>
            <div className='flex justify-center my-10 items-center'>
              <img src={Logo} className='w-9/12' alt="" />
            </div>
            <div className='flex justify-center items-center'>
              <div className='mt-5 grid grid-cols-2 font-bold text-2xl opacity-85 gap-6'>
                <p>Projec</p>
                <p>Testmonials</p>
                <p>Rentals</p>
                <p>New & Events</p>
                <p>About</p>
                <p>Blogs</p>
                <p>Contact</p>
                <p>key handover</p>
              </div>
            </div>
            <hr className='mx-10  mt-8 border border-gray-900' />
          </div>
          <div>
            <div className='p-10 grid grid-cols-[4rem,1fr]'>
              <div className=''>1</div>
              <div className='text- text-justify text-white opacity-90 me-5 leading-8'>
                <p>NAVI MUMBAI</p>
                <p>National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705
                </p>
                <p>marketingmumbai@nationalbuilders.in</p>
                <p>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
              </div>
            </div>
            <hr className='mx-10  mt-8 border border-gray-900' />
          </div>

        </div>
 */}

      </section>
      <section className='hidden lg:block'>
        <div className=' bg-black grid grid-rows-[10rem,1px,1fr]'>
          <div className='flex justify-center items-center'>
            <img src={Logo} className='w-56 ' alt="" />
          </div>
          <hr className='xl:mx-auto mx-20 xl:container border border-gray-900' />
          <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${BgImage})` }}>
            <div className='xl:mx-auto mx-20 xl:container grid grid-rows-[1fr,6rem,12rem] '>
              <div className='grid grid-cols-[1fr,5rem,1fr] gap-8'>
                <Card className='bg-gray-900 bg-opacity-50 border p-5 text-opacity-95 text-xl gap-3 text-white opacity-90 leading-8  border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2'>NAVI MUMBAI </p>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-3/12 flex text-red-500'>
                      <IoLocationSharp className='h-7 w-7 mt-2' />
                    </div>
                    <p className='w-ful'>National Builders Office, Sea  Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705</p>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-1/12 flex text-red-500'>
                      <MdEmail className='h-6 w-6' />
                    </div>
                    <a href="mailto:marketingmumbai@nationalbuilders.in" className='w-full ps-2'>marketingmumbai@nationalbuilders.in</a>
                  </div>
                  <div className='w-full flex mt-1'>
                    <div className='w-1/6 flex text-red-500'>
                      <FaPhoneAlt className='h-6 w-6 mt-2' />
                    </div>
                    <p className='-ms-2'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
                  </div>
                </Card>

                <div className='bg-gray-900 bg-opacity-50 border flex justify-center items-center border-gray-800 my-10 rounded-[2rem] lg:flex-col h-16 lg:h-auto'>
                  <FaFacebook className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <GrInstagram className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <FaLinkedin className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <IoLogoYoutube className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                </div>

                <Card className='bg-gray-900 bg-opacity-50 border p-5 text-opacity-95 text-xl gap-3 text-white opacity-90 leading-8  border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2'>Kochi </p>
                  </div>
                  <div className='w-full flex '>
                    <div className='w-2/12 flex text-red-500'>
                      <IoLocationSharp className='h-7 w-7 mt-2' />
                    </div>
                    <p className='w-ful -ms-2'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024</p>
                  </div>
                  <div className='w-full flex mt-7'>
                    <div className='w-1/12 flex text-red-500'>
                      <MdEmail className='h-6 w-6' />
                    </div>
                    <a href="mailto:marketingkochi@nationalbuilders.in" className='w-full ps-2'>marketingkochi@nationalbuilders.in</a>
                  </div>
                  <div className='w-full flex mt-2'>
                    <div className='w-1/12 flex text-red-500'>
                      <FaPhoneAlt className='h-6 w-6 mt-1' />
                    </div>
                    <p className='ps-2'>+91 484 2340781, 2333391, +91 484 2534558</p>
                  </div>
                </Card>
              </div>
              <Card className='rounded-[2rem] flex-row justify-between items-center px-10 py-4 lg:py-0 bg-opacity-50 text-white font-bold lg:text-xl bg-gray-900 border border-gray-800'>
                <Link to={'/'}>Home</Link>
                <Link to={'/project'}>Projects</Link>
                <Link to={'/rentals'}>Rentals</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/testimonials'}>Testimonials</Link>
                <Link to={'/new-events'}>News & Events</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/key-handover'}>Key handover</Link>
              </Card>
              <Card className='flex-row justify-between items-center px-20 rounded-[2rem] lg:h-20 mt-10  text-white mb-10 lg:mb-0 lg:text-xl bg-gray-900 bg-opacity-50 border border-gray-800'>
                <p className='flex justify-center items-center '><MdCopyright className='w-6 h-6' /> National Builders All Rights Reseved
                </p>
                <img src={Accolades_logo} alt="" />
                <p className='flex justify-center items-center'>Privacy Policy | Terms of Service</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer