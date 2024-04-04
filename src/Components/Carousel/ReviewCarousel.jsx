import React from 'react'
import { Carousel, Typography, Button, Card, Rating } from "@material-tailwind/react";
import Qotes from '../../assets/Homepage/Qotes.svg'
import Round from '../../assets/Homepage/round.svg'

import Shyamaprasad from '../../assets/Users/Shyamaprasad.png'

function ReviewCarousel() {
    return (
        <Carousel className="rounded-xl text-white ">
            <div className='grid grid-cols-2 h-full'>
                <div className='flex justify-center items-center'>
                    <Card className='lg:h-4/5 md:h-[26rem] h-[20rem] grid grid-rows-3 w-[10rem] md:w-[16rem] lg:w-[31rem] rounded-[2rem] lg:rounded-[3rem]' style={{ backgroundColor: 'rgba(32,33,45,255)' }}>
                        <div className='text-xl md:text-4xl lg:text-6xl ms-4 text-center flex lg:justify-center items-center'>
                            <div className='mt-4 lg:mt-'>
                                <p className='text-red-500'>What they say</p>
                                <p className='text-white'>about us?</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={Qotes} className='' alt="" />
                        </div>
                        <div className='flex justify-center items-center -mt-4 lg:-mt-0'>
                            <div className='ms-6 lg:ms-12 text-white'>
                                <p className='text-xl md:text-2xl lg:text-4xl font-bold text-wrap sticky'>SHYAMPRASAD T C</p>
                                <p className='text-xs md:text-xl opacity-70 lg:text-xl mt-3'>NATIONAL SIGNATURE</p>
                            </div>

                        </div>
                    </Card>
                </div>
                <div className='grid grid-rows-[18rem,1fr]'>
                    <div className='flex ms-20 items-center '>
                        <img src={Round} alt="" />
                        <p className='ps-10 opacity-90 -ms-8 lg:-ms-0 lg:text-5xl font-extralight'>Testimonials</p>
                    </div>
                    <div className='flex items-center w-full -ms-20'>
                        <Card className='h-[10rem]  md:h-[14rem]  lg:h-4/6 -mt-[11rem] lg:-mt-10 w-[15rem] md:w-[25rem] lg:w-11/12 grid grid-cols-2 -ms-16 md:-ms-28 lg:-ms-52 bg-gray-900 rounded-[2rem] lg:rounded-[3rem]'>
                            <div className='w-full h-[10rem] md:h-full lg:h-full bg-cover relative rounded-s-[2rem] lg:rounded-s-[3rem]' style={{ backgroundImage: `url(${Shyamaprasad})` }}>
                            </div>
                            <div className='grid h-full grid-rows-[1fr,7rem] my-auto '>
                                <div className='flex justify-center items-center'>
                                   <div className='text-xl text-white opacity-60 mx-14'>
                                   <p>When i thought buy a home at kochi i started immense research and finally i arrived at a conclusion that natinal bilders is the best builders in kochi.</p>
                                    <p>When i went through the history of projects of national Builders...</p>
                                   </div>
                                   
                                </div>
                                <div className='grid grid-cols-[1fr,10rem]'>
                                    <div className='flex justify-end items-start w-full'>
                                    <Rating value={5} readonly />
                                    </div>
                                <div className='flex justify-center items-center'>
                                <img src={Qotes} className='w-10' alt="" />
                                </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>

        </Carousel>
    )
}

export default ReviewCarousel