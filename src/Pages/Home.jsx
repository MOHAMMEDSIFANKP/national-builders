import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

// Images
import bgImge1 from '../assets/Homepage/bgimage1.png'
import Image1 from '../assets/Awards/image1.png'
import Image2 from '../assets/Awards/image2.png'
import Image3 from '../assets/Awards/image3.png'
import Image4 from '../assets/Awards/image4.png'
import Image5 from '../assets/Awards/image5.png'

import Round from '../assets/Homepage/round.svg'


// Video
import Video1 from '../assets/video1.mp4'

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


import './Home.css'
import ReviewCarousel from '../Components/Carousel/ReviewCarousel'
import NewsBlogsCarousel from '../Components/Carousel/NewsBlogsCarousel'
import Ourpresence from '../Components/Ourpresence/Ourpresence'
function Home() {
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    document.title = 'Top Builders In Kochi | Home'
  }, [])



  return (
    <>
      {/* Background images and Text stat */}
      <motion.div className='-mt-36 lg:-mt-10 h-screen bg-cover bg-center flex justify-center items-center  ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${bgImge1})` }}
        initial={{
          opacity: 0,
          y: 50,

        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
      >
        <p className='capitalize mx-10 lg:ms-0 text-4xl md:text-6xl -mt-28 bg-gradient-to-r from-white to-gray-600 inline-block text-transparent bg-clip-text' >Expression Of Excellent Living</p>
      </motion.div>
      {/* Background images and Text End */}
      <motion.div className='w-full mx-auto container grid grid-rows-[1fr,16rem]'
       initial={{
        opacity: 0,
        y: 50,

      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      >
        <div className='flex flex-col lg:flex-row lg:items-start pt-36 py-10 mx-4 lg:mx-0'>
          <div className='w-full lg:w-8/12 text-white text-2xl md:text-4xl lg:text-6xl mb-5 lg:mb-0 -mt-16 lg:mt-0'>
            <div className='invisible lg:visible h-0 lg:h-full'>
              {/* For Laptop View */}
              <p className='my-3 me-3'>Best Builders</p>
              <p className='my-3 me-3'>In</p>
              <p className='my-3 me-3 text-red-500'>Navi Mumbai</p>
              <p className='my-3 me-3'>And</p>
              <p className='my-3 me-3 text-red-500'>Kerala</p>
            </div>
            {/* For mobile View */}
            <div className='visible lg:invisible lg:h-0'>
              <p className='my-3 me-3 text-center'>Best Builders In</p>
              <p className='my-3 me-3 text-center'><span className='text-red-500'>Navi Mumbai</span> And <span className='text-red-500'>Kerala</span></p>
            </div>
          </div>
          <div className='w-full md:w-full text-white'>
            <div class='opacity-60 font-medium text-xl w-full'>
              <p class='leading-8' style={{ wordSpacing: '0.3em' }}>A visionary real estate development firm, National Builders specializes in pioneering architecturally distinct residential and mixed-use projects in India's prime metropolitan markets of Navi Mumbai and Kerala.</p>
              <p class='leading-8 mt-5 text-justify' style={{ wordSpacing: '0.3em' }}>The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality and delivery of best-in-class features are visible in each of the 135+ projects of National Builders.</p>
            </div>
            <button className='bg-343894 invisible lg:visible h-0 lg:h-full mt-14 hover:bg-white hover:text-red-500 text-xl rounded-full flex p-4'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Read More {hovered ? (
                <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
              ) : (
                <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
              )}
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 w-full -mt-16 lg:mt-0'>
          <div className='my-auto mx-auto text-center'>
            <p className='text-6xl my-4'>5</p>
            <p className='opacity-[0.5] text-xl'>Launched</p>
          </div>
          <div className='my-auto mx-auto text-center'>
            <p className='text-6xl my-4'>135</p>
            <p className='opacity-[0.5] text-xl'>Project's Completed</p>
          </div>
          <div className='my-auto mx-auto text-center'>
            <p className='text-6xl my-4'>4</p>
            <p className='opacity-[0.5] text-xl'>Ready to Move In</p>
          </div>
          <div className='my-auto mx-auto text-center'>
            <p className='text-6xl my-4'>4</p>
            <p className='opacity-[0.5] text-xl'>Ongoing</p>
          </div>
        </div>
      </motion.div>
      {/* Awards & Recognitions also images view started */}
      <motion.div className='pt-20 py-56 mx-auto container'
       initial={{
        opacity: 0,
        y: 50,

      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      >
        <div className='flex justify-center items-center text-center text-3xl lg:text-6xl'>
          <p><span className='text-red-500'>Awards</span> and <span style={{
            backgroundImage: 'linear-gradient(to right, white, #64748b)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Recognitions</span>
          </p>
        </div>
        <div className='w-full pt-10 lg:pt-28 flex justify-center items-center'>
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Image1} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Image2} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Image3} alt="" />
          <img className='mx-2 lg:mx-12 w-2/12 lg:w-auto flex justify-center items-center' src={Image4} alt="" />
        </div>
      </motion.div>
      {/* Awards & Recognitions also images view End */}

      <Ourpresence />

      {/* Video div start */}
      <motion.div className='h-screen flex justify-center items-center mx-auto container'
       initial={{
        opacity: 0,
        y: 50,

      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      >
        <video controls className='video-player'>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>


      {/* Video div End */}

      {/* Review View Start */}
      <motion.div className='h-screen'
       initial={{
        opacity: 0,
        y: 50,

      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      }}
      >
        <ReviewCarousel />
      </motion.div>
      {/* Review View End */}
      {/* News & BlogsCarousel View Start */}
      <div className='h-screen bg-gradient-to-r from-gray-900 to-gray-600'>
        <div className='flex h-2/6 justify-around items-center'>
          <div className='flex justify-center items-center gap-11'>
            <img src={Round} alt="" /><p className='text-5xl  font-thin'>New & Blogs</p>
          </div>
          <button className='bg-343894  hover:bg-white hover:text-red-500 text-xl rounded-full flex p-4'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View All {hovered ? (
              <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
            ) : (
              <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
            )}
          </button>
        </div>
        <div className='ms-36'>
          <NewsBlogsCarousel />
        </div>
      </div>
      {/* News & BlogsCarousel View End */}
    </>
  )
}

export default Home