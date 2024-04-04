import React, { useEffect, useState } from 'react'

// Images
import bgImge1 from '../assets/Homepage/bgimage1.png'
import Image1 from '../assets/Awards/image1.png'
import Image2 from '../assets/Awards/image2.png'
import Image3 from '../assets/Awards/image3.png'
import Image4 from '../assets/Awards/image4.png'
import Image5 from '../assets/Awards/image5.png'
import Mumbai from '../assets/Homepage/mumbai.svg'
import Kochi from '../assets/Homepage/kochi.svg'
import mumbaitothane from '../assets/Homepage/mumbaitothane.svg'
import thanetokochi from '../assets/Homepage/thanetokochi.svg'
import kochitothiruvalla from '../assets/Homepage/kochitothiruvalla.svg'
import Thane from '../assets/Homepage/thane.svg'
import Thiruvalla from '../assets/Homepage/thiruvalla.svg'
import Round from '../assets/Homepage/round.svg'

// Video
import Video1 from '../assets/video1.mp4'

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import './Home.css'
import ReviewCarousel from '../Components/Carousel/ReviewCarousel'
import NewsBlogsCarousel from '../Components/Carousel/NewsBlogsCarousel'
function Home() {
  const [hovered, setHovered] = useState(false);

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

useEffect(()=>{
  document.title = 'Top Builders In Kochi | Home'
},[])


useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  // Observe each content div
  document.querySelectorAll('.content').forEach(div => {
    observer.observe(div);
  });

  return () => {
    // Clean up observer
    observer.disconnect();
  };
}, []);
  return (
    <>
      {/* Background images and Text stat */}
      <div className='h-screen bg-cover bg-center flex justify-center items-center content visible' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${bgImge1})` }}>
        <p className='capitalize mx-10 lg:ms-0 text-4xl md:text-6xl -mt-28 bg-gradient-to-r from-white to-gray-600 inline-block text-transparent bg-clip-text' >Expression Of Excellent Living</p>
      </div>
      {/* Background images and Text End */}
      <div className='w-full mx-auto container grid grid-rows-[1fr,16rem] content visible'>
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
            <p className='opacity-[0.5] text-xl'>Sold out</p>
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
      </div>
      {/* Awards & Recognitions also images view started */}
      <div className='pt-20 py-56 mx-auto container content visible'>
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
      </div>
      {/* Awards & Recognitions also images view End */}

      <div>
        <div className='w-full content visible'>
          <div className='flex justify-center items-center'>
            {/* Round shape start */}
            <div className='rounded-full border -me-8 lg:-me-0 border-gray-500 h-10 w-10 lg:h-28 lg:w-28'>
            </div>
            <div className='rounded-full border lg:-mt-3 -mt-1 lg:-ms-24 border-gray-500 h-10 w-10 lg:h-28 lg:w-28'>
              {/* Round shape End */}
            </div>
            <p className='text-center py-10 text-6xl ps-10'>Our Presence</p>
          </div>
        </div>
        {/* Bg images main div */}
        <div className='mt-36'>
          {/* Images and Contents */}
          <div className='grid grid-cols-2 mx-36 gap-16 my-10 content visible '>
            <img src={Mumbai} className='w-full h-full' alt="" />
            <div className='grid grid-rows-[1fr,3rem]'>
              <div className='opacity-60'>
                <p className='text-9xl font-bold italic heding-font'>Mumbai</p>
                <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>
              </div>
              <div className='flex justify-end  w-11/12 items-center pt-10'>
                <button className='bg-343894  hover:bg-white hover:text-red-500 text-xl rounded-full flex p-3'
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
          </div>

          <div class=" ms-36">
            <img src={mumbaitothane} className='-mt-[4.1rem] -mb-[12.1rem] ' alt="" />
          </div>

          <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
            <div className='opacity-60'>
              <p className='text-9xl font-bold italic heding-font'>Thane</p>
              <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>

            </div>
            <img src={Thane} className='w-full h-full' alt="" />
          </div>


          <div class=" ms-24 content visible">
            <img src={thanetokochi} className='-mt-[1.6rem] -mb-[16rem] ' alt="" />
          </div>

          <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
            <img src={Kochi} className='w-full h-full' alt="" />
            <div className='opacity-60'>
              <p className='text-9xl font-bold italic heding-font'>Kochi</p>
              <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>
            </div>
          </div>


          <div class="  flex justify-end me-24 content visible">
            <img src={kochitothiruvalla} className='-mt-[2.4rem] -mb-[16rem] ' alt="" />
          </div>

          <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
            <div className='opacity-60'>
              <p className='text-9xl font-bold italic heding-font'>Thiruvalla</p>
              <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>
            </div>
            <img src={Thiruvalla} className='w-full h-full' alt="" />
          </div>


          <div class="  h-20">
          </div>
          {/* Images and Contents End*/}
        </div>
      </div>

      {/* Video div start */}
      <div className='h-screen flex justify-center items-center mx-auto container'>
        <video controls className='w-full rounded-[2rem] lg:rounded-[8rem]'>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Video div End */}

      {/* Review View Start */}
      <div className='h-screen'>
        <ReviewCarousel />
      </div>
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