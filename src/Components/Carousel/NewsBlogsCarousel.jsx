import React from 'react'
import Building1 from '../../assets/Building/building1.jpg'
import Building2 from '../../assets/Building/building2.jpg';
import Building3 from '../../assets/Building/building3.jpg';
import Building4 from '../../assets/Building/building4.jpg';
import Building5 from '../../assets/Building/building5.jpg';

import { IoIosArrowForward } from "react-icons/io";
import { Card } from '@material-tailwind/react';
function NewsBlogsCarousel() {
  return (
    <>
    <div className='flex w-full max-w-[91vw] overflow-x-auto' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${Building1})` }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-4 lg:mt-10'>
                        <p className='font-bold text-white lg:text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-md lg:text-xl text-white my-2 lg:my-5'>March 16, 2022</p>
                        <p className='text-white opacity-75 text-sm lg:text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${Building2})` }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-4 lg:mt-10'>
                        <p className='font-bold text-white lg:text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-md lg:text-xl text-white my-2 lg:my-5'>March 16, 2022</p>
                        <p className='text-white opacity-75 text-sm lg:text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${Building3})` }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-4 lg:mt-10'>
                        <p className='font-bold text-white lg:text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-md lg:text-xl text-white my-2 lg:my-5'>March 16, 2022</p>
                        <p className='text-white opacity-75 text-sm lg:text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${Building4})` }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-4 lg:mt-10'>
                        <p className='font-bold text-white lg:text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-md lg:text-xl text-white my-2 lg:my-5'>March 16, 2022</p>
                        <p className='text-white opacity-75 text-sm lg:text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='lg:w-[45rem] w-[19rem] lg:h-[27rem] bg-gray-900 lg:grid lg:grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className='h-[10rem] lg:h-full bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-s-[2rem]' style={{ backgroundImage: `url(${Building5})` }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-3 lg:m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-4 lg:mt-10'>
                        <p className='font-bold text-white lg:text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-md lg:text-xl text-white my-2 lg:my-5'>March 16, 2022</p>
                        <p className='text-white opacity-75 text-sm lg:text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-2 lg:mt-12 py-4 lg:py-0 lg:text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    </>
  )
}

export default NewsBlogsCarousel