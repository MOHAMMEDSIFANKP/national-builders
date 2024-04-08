import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

import Builing1 from '../../assets/Aboutpage/builing1.jpg'
import Round from '../../assets/Homepage/round.svg'
import Mission from '../../assets/Aboutpage/mission.jpg'
import Vission from '../../assets/Aboutpage/vission.jpg'
import Director1 from '../../assets/Aboutpage/director1.png'
import Director2 from '../../assets/Aboutpage/director2.png'
import Director3 from '../../assets/Aboutpage/director3.png'
import Director4 from '../../assets/Aboutpage/director4.jpeg'

import './About.css'
function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className='w-full mt-36 lg:mt-20 content visible'>
        <p className='text-center text-2xl lg:text-3xl'>About</p>
        <p className='capitalize py-10 font-bold bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-center text-4xl lg:text-7xl'>National Builders</p>
      </div>
      <div className='lg:h-[90vh] w-full mx-auto container mt-20 '>

        <div className='rounded-[1rem] lg:rounded-[3rem] h-full p-6 lg:p-10 bg-gray-900 lg:flex content visible'>
          <div className='hidden-div-after-tab  h-4/6'>
            <img src={Builing1} className='w-full h-full rounded-[2rem]' alt="" />
          </div>
          <div className='bg-black w-full h-full rounded-[2rem] lg:rounded-s-[1rem] lgLrounded-b-[2rem] p-6 text-justify lg:p-14'>
            <p className='text-center lg:text-start text-2xl lg:text-6xl leading-tight bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text ' style={{ wordSpacing: '0.2em' }}><span className='text-red-500'>Expression</span> of Excellent Living</p>
            <p className='pt-6 leading- text-justify text-xl opacity-65 z-1'>A visionary real estate development firm, National Builders specializes in pioneering architecturally distinct residential and mixed-use projects in India’s prime metropolitan markets of Navi Mumbai and Kerala.</p>
            <p className='pt-6 leading- text-justify text-xl opacity-65 z-1' > The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality and delivery of best-in-class features is visible in each of the 135+ projects of National Builders – from the 6500-sq. ft. luxury homes in Vivant – the tallest tower in the satellite city of Navi Mumbai and the 3,000 sq. ft. Sky Villas in the 20-storeyed National Kingdom at Cochin, right to the 600 sq. ft. apartments in projects for home buyers with a select budget. From the premium addresses of Palm Beach Road in Navi Mumbai and Palarivattom in Cochin, to the emerging areas of New Panvel and NAINA region, the projects of National Builders dot prime locations in the two key markets. At National Builders, superiority in quality, culture of innovation and long-term sustainability are the key focus areas for operational excellence. The philosophy behind every National home is simple – live the values, and create genuine value for all stakeholders.</p>
          </div>
          <div className='hidden-div w-8/12 rounded-e-[1rem] h-5/6'>
            <img src={Builing1} className='w-full h-full' alt="" />
          </div>
        </div>
      </div>
      <div className='mx-auto p-5  container lg:my-20 text-xl text-justify content visible'>
        <p className='my-4 opacity-65'>An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala.</p>
        <p className='my-4 opacity-65'>This solid legacy of 35 years built on the twin-pillars of excellence and integrity has won the trust of customers around the globe. Today, National Builders enjoys a reputation that has made it a developer of choice for home buyers across the spectrum.</p>
        <p className='my-4 opacity-65'>The advantages of a family-office management structure and robust internal accruals enable National Builders to invest in quality that lasts for generations and yields smart returns on investments for the home buyers.</p>
      </div>

      <div className='bg-20212D content visible'>
        <div className='grid h-full pb-10 lg:pb-20 gap-10 lg:grid-rows-[16rem,6rem,1fr,1fr] mx-auto container'>
          <div className='flex mt-10 lg:mt-6 justify-center lg:justify-start items-center'>
            <img src={Round} className='w-1/6 lg:w-32' alt="" />
            <p className='ps-7 text-2xl lg:text-5xl'><span className='text-red-500'>Mission</span> & <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>Vision</span></p>
          </div>
          <p className='text-xl p-5 opacity-65 text-justify'>An eminent business leader and a real-estate pioneer, Founder-CMD M C Sunny’s leadership with nearly four decades of hands-on professional experience and a strong value system has built National Builders into one of the most reputed real-estate companies in Navi Mumbai and Kerala.</p>
          <div className='lg:flex'>
            <div className='bg-252630 pt-5 lg:pt-10 px-5 lg:px-10 rounded-t-[2rem] rounded-b-[1rem] flex'>
              <img src={Mission} className='rounded-[2rem]' alt="" />
              <div className='flex justify-center items-center '>
                <div className='w-[2px] rounded-full bg-red-500 h-20 hidden-div'></div>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='mt-5 lg:mt-0'>
                <p className='ms-10 bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-2xl font-bold'>Mission</p>
                <p className='ms-10 pt-5 text-white opacity-65 text-xl'>Building quality urban spaces with integrity and innovation that inspires generations</p>
              </div>
            </div>
          </div>
          <div className='lg:flex'>
            <div className='flex justify-center items-center '>
              <div className='mt-5 lg:mt-0 hidden-div'>
                <p className='ms-10 bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-2xl font-bold'>Mission</p>
                <p className='ms-10 pt-5 text-white opacity-65 text-xl'>Building quality urban spaces with integrity and innovation that inspires generations</p>
              </div>
            </div>
            <div className='bg-252630  pt-10 px-10 rounded-t-[2rem] rounded-b-[1rem] flex'>
              <div className='flex justify-center items-center '>
                <div className='w-[2px] rounded-full bg-red-500 h-20'></div>
              </div>
              <img src={Vission} className='rounded-[2rem] ' alt="" />

            </div>
            <div className='flex justify-center items-center '>
              <div className='mt-5 lg:mt-0 hidden-div-after-tab'>
                <p className='ms-10 bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-2xl font-bold'>Mission</p>
                <p className='ms-10 pt-5 text-white opacity-65 text-xl'>Building quality urban spaces with integrity and innovation that inspires generations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto container content visible'>
        <div className='flex py-10 lg:py-20 justify-center lg:justify-start items-center'>
          <img src={Round} className='w-1/6 lg:w-32' alt="" />
          <p className='ps-7 text-2xl lg:text-5xl'><span className='text-red-500'>Mission</span> & <span className='bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text'>Vision</span></p>
        </div>
        <div>
          <p className='text-xl mx-5 lg:mx-0 text-justify opacity-65'>Lorem ipsum dolor sit amet consectetur. Tellus lobortis massa viverra sapien tincidunt turpis quam. Dictum elementum adipiscing nec urna id fames mauris ut mauris. Vitae luctus augue auctor nascetur tempus ullamcorper cras at. Commodo est donec purus est tempus sollicitudin. Dictum gravida duis egestas.</p>
        </div>
        <div className='lg:flex right-auto left-auto pt-10 lg:pt-0 '>
          <Card className="mt-6 lg:w-96 bg-gray-900 lg:me-4 hover:shadow-gray-600 hover:shadow-xl">
            <img className='w-full mt-4 px-6 pt-3 lg:pt-2 lg:px-4'
              src={Director1 || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <div className='flex -mt-5 justify-center items-center '  >
              <div className='bg-343894 px-6 py-3 rounded-full'>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_917_15657)">
                    <path d="M21.0845 0.570312H1.91113C0.992676 0.570312 0.25 1.29541 0.25 2.19189V21.4443C0.25 22.3408 0.992676 23.0703 1.91113 23.0703H21.0845C22.0029 23.0703 22.75 22.3408 22.75 21.4487V2.19189C22.75 1.29541 22.0029 0.570312 21.0845 0.570312ZM6.92529 19.7437H3.58545V9.00342H6.92529V19.7437ZM5.25537 7.54004C4.18311 7.54004 3.31738 6.67432 3.31738 5.60645C3.31738 4.53857 4.18311 3.67285 5.25537 3.67285C6.32324 3.67285 7.18896 4.53857 7.18896 5.60645C7.18896 6.66992 6.32324 7.54004 5.25537 7.54004ZM19.4233 19.7437H16.0879V14.5229C16.0879 13.2793 16.0659 11.6753 14.352 11.6753C12.6162 11.6753 12.3525 13.0332 12.3525 14.4351V19.7437H9.02149V9.00342H12.2207V10.4712H12.2646C12.7085 9.62744 13.7983 8.73535 15.4199 8.73535C18.7993 8.73535 19.4233 10.959 19.4233 13.8506V19.7437Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_15657">
                      <rect width="22.5" height="22.5" fill="white" transform="translate(0.25 0.570312)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-xl text-white text-center">
                M.C.Sunny
              </Typography>
              <Typography className='text-center'>
                CMD and Managing Director
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 lg:w-96 bg-gray-900 lg:me-4 hover:shadow-gray-600 hover:shadow-xl">
          <img className='w-full mt-4 px-6 pt-3 lg:pt-2 lg:px-4'
              src={Director2 || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <div className='flex -mt-5 justify-center items-center '  >
              <div className='bg-343894 px-6 py-3 rounded-full'>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_917_15657)">
                    <path d="M21.0845 0.570312H1.91113C0.992676 0.570312 0.25 1.29541 0.25 2.19189V21.4443C0.25 22.3408 0.992676 23.0703 1.91113 23.0703H21.0845C22.0029 23.0703 22.75 22.3408 22.75 21.4487V2.19189C22.75 1.29541 22.0029 0.570312 21.0845 0.570312ZM6.92529 19.7437H3.58545V9.00342H6.92529V19.7437ZM5.25537 7.54004C4.18311 7.54004 3.31738 6.67432 3.31738 5.60645C3.31738 4.53857 4.18311 3.67285 5.25537 3.67285C6.32324 3.67285 7.18896 4.53857 7.18896 5.60645C7.18896 6.66992 6.32324 7.54004 5.25537 7.54004ZM19.4233 19.7437H16.0879V14.5229C16.0879 13.2793 16.0659 11.6753 14.352 11.6753C12.6162 11.6753 12.3525 13.0332 12.3525 14.4351V19.7437H9.02149V9.00342H12.2207V10.4712H12.2646C12.7085 9.62744 13.7983 8.73535 15.4199 8.73535C18.7993 8.73535 19.4233 10.959 19.4233 13.8506V19.7437Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_15657">
                      <rect width="22.5" height="22.5" fill="white" transform="translate(0.25 0.570312)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-xl text-white text-center">
                Sherly Sunny
              </Typography>
              <Typography className='text-center'>
                Director
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 lg:w-96 bg-gray-900 lg:me-4 hover:shadow-gray-600 hover:shadow-xl">
          <img className='w-full mt-4 px-6 pt-3 lg:pt-2 lg:px-4'
              src={Director3 || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <div className='flex -mt-5 justify-center items-center '  >
              <div className='bg-343894 px-6 py-3 rounded-full'>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_917_15657)">
                    <path d="M21.0845 0.570312H1.91113C0.992676 0.570312 0.25 1.29541 0.25 2.19189V21.4443C0.25 22.3408 0.992676 23.0703 1.91113 23.0703H21.0845C22.0029 23.0703 22.75 22.3408 22.75 21.4487V2.19189C22.75 1.29541 22.0029 0.570312 21.0845 0.570312ZM6.92529 19.7437H3.58545V9.00342H6.92529V19.7437ZM5.25537 7.54004C4.18311 7.54004 3.31738 6.67432 3.31738 5.60645C3.31738 4.53857 4.18311 3.67285 5.25537 3.67285C6.32324 3.67285 7.18896 4.53857 7.18896 5.60645C7.18896 6.66992 6.32324 7.54004 5.25537 7.54004ZM19.4233 19.7437H16.0879V14.5229C16.0879 13.2793 16.0659 11.6753 14.352 11.6753C12.6162 11.6753 12.3525 13.0332 12.3525 14.4351V19.7437H9.02149V9.00342H12.2207V10.4712H12.2646C12.7085 9.62744 13.7983 8.73535 15.4199 8.73535C18.7993 8.73535 19.4233 10.959 19.4233 13.8506V19.7437Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_15657">
                      <rect width="22.5" height="22.5" fill="white" transform="translate(0.25 0.570312)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-xl text-white text-center">
                Sijo Sunny
              </Typography>
              <Typography className='text-center'>
                Director
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 lg:w-96 bg-gray-900 lg:me-4 hover:shadow-gray-600 hover:shadow-xl">
          <img className='w-full mt-4 px-6 pt-3 lg:pt-2 lg:px-4 h-4/6'
              src={Director4 || "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}
              alt="card-image"
            />
            <div className='flex -mt-5 justify-center items-center '  >
              <div className='bg-343894 px-6 py-3 rounded-full'>
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_917_15657)">
                    <path d="M21.0845 0.570312H1.91113C0.992676 0.570312 0.25 1.29541 0.25 2.19189V21.4443C0.25 22.3408 0.992676 23.0703 1.91113 23.0703H21.0845C22.0029 23.0703 22.75 22.3408 22.75 21.4487V2.19189C22.75 1.29541 22.0029 0.570312 21.0845 0.570312ZM6.92529 19.7437H3.58545V9.00342H6.92529V19.7437ZM5.25537 7.54004C4.18311 7.54004 3.31738 6.67432 3.31738 5.60645C3.31738 4.53857 4.18311 3.67285 5.25537 3.67285C6.32324 3.67285 7.18896 4.53857 7.18896 5.60645C7.18896 6.66992 6.32324 7.54004 5.25537 7.54004ZM19.4233 19.7437H16.0879V14.5229C16.0879 13.2793 16.0659 11.6753 14.352 11.6753C12.6162 11.6753 12.3525 13.0332 12.3525 14.4351V19.7437H9.02149V9.00342H12.2207V10.4712H12.2646C12.7085 9.62744 13.7983 8.73535 15.4199 8.73535C18.7993 8.73535 19.4233 10.959 19.4233 13.8506V19.7437Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_15657">
                      <rect width="22.5" height="22.5" fill="white" transform="translate(0.25 0.570312)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

            </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-xl text-white text-center">
                Anne Sijo Sunny
              </Typography>
              <Typography className='text-center'>
                Director
              </Typography>
            </CardBody>
          </Card>
        </div>

      </div>

      <div className='bg-252630 mt-20 content visible '>
        <div className='mx-auto container lg:flex h-full p-4 lg:p-10 w-full'>
          <Card className='bg-gray-900 h-full my-8 lg:my-0  me-10 w-full'>
            <img className='rounded-lg' src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
            <p className='text-center py-5 text-xl font-bold text-white'>Our <span className='text-red-500'>Mumbai</span> Office</p>
          </Card>
          <Card className='bg-gray-900 h-full my-8 lg:my-0  w-full lg:me-10'>
            <img className='rounded-lg' src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
            <p className='text-center py-5 text-xl font-bold text-white'>Our <span className='text-red-500'>Mumbai</span> Office</p>
          </Card>
        </div>
      </div>
      <div className='mx-auto mt-20 container lg:grid lg:grid-cols-[1fr,16rem] gap-10'>
        <div>
          <p className='text-center lg:text-start mx-10 lg:mx-0 text-3xl lg:font-bold'>Find your dream <span className='lg:bg-gradient-to-r lg:from-white lg:to-gray-600  lg:text-transparent lg:bg-clip-text'>home today</span></p>
          <p className='pt-5 mx-3 lg:mx-0 text-justify text-xl opacity-65 '>Lorem ipsum dolor sit amet consectetur. Tellus lobortis massa viverra sapien tincidunt turpis quam. Dictum elementum adipiscing nec urna id fames mauris ut mauris. Vitae luctus augue auctor nascetur tempus ullamcorper cras at. Commodo est donec purus est tempus sollicitudin. Dictum gravida duis egestas.</p>
        </div>
        <div className='flex justify-center mt-6 items-center'>
          <button className='bg-343894 hover:bg-white hover:text-red-500 lg:text-xl rounded-full flex p-3 lg:p-4'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Explore Property {hovered ? (
              <GoArrowRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 text-white rounded-full icon-transition`} />
            ) : (
              <GoArrowUpRight className={`ms-2 lg:ms-4 p-1 h-7 md:h-8 w-7 md:w-8 bg-red-500 rounded-full icon-transition`} />
            )}
          </button>

        </div>
      </div>
    </>
  )
}

export default About