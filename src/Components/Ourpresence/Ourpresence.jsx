import React, { useEffect, useState } from 'react'
import Mumbai from '../../assets/Homepage/mumbai.svg';
import Kochi from '../../assets/Homepage/kochi.svg'
import mumbaitothane from '../../assets/Homepage/mumbaitothane.svg'
import thanetokochi from '../../assets/Homepage/thanetokochi.svg'
import kochitothiruvalla from '../../assets/Homepage/kochitothiruvalla.svg'
import Thane from '../../assets/Homepage/thane.svg'
import Thiruvalla from '../../assets/Homepage/thiruvalla.svg'

import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function Ourpresence() {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const drawPathOnScroll = () => {
            const svgPath = document.querySelector('.draw-path');

            if (svgPath) {
                const scrollPosition = window.scrollY / svgPath.getBBox().height;

                const pathLength = svgPath.getTotalLength();

                svgPath.style.strokeDasharray = `${pathLength}px ${pathLength}px`;
                svgPath.style.strokeDashoffset = `${pathLength - scrollPosition * pathLength}px`;
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', drawPathOnScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', drawPathOnScroll);
        };
    }, []);


    useEffect(() => {
        const drawPathOnScroll = () => {
            const svgPath = document.querySelector('.draw-path2');

            if (svgPath) {
                const scrollPosition = window.scrollY / svgPath.getBBox().height;

                const pathLength = svgPath.getTotalLength();

                // Reverse the logic: Increase stroke dash offset when scrolling down
                svgPath.style.strokeDasharray = `${pathLength}px ${pathLength}px`;
                svgPath.style.strokeDashoffset = `${scrollPosition * pathLength}px`;
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', drawPathOnScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', drawPathOnScroll);
        };
    }, []);

    useEffect(() => {
        const drawPathOnScroll = () => {
            const svgPath = document.querySelector('.draw-path3');
    
            if (svgPath) {
                const scrollPosition = window.scrollY / svgPath.getBBox().height;
    
                const pathLength = svgPath.getTotalLength();
    
                // Reverse the logic: Hide when scrolling down, show when scrolling up
                svgPath.style.strokeDasharray = `${pathLength}px ${pathLength}px`;
                svgPath.style.strokeDashoffset = `${(5- scrollPosition) * pathLength}px`;
            }
        };
    
        // Attach the scroll event listener
        window.addEventListener('scroll', drawPathOnScroll);
    
        // Clean up
        return () => {
            window.removeEventListener('scroll', drawPathOnScroll);
        };
    }, []);
    

    return (
        <>
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
                        <img src={Mumbai} className='w-full' alt="" />
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

                    <div class=" ms-24 -mt-[6.6rem] -mb-[12.8rem]">
                        <svg width="1701" height="555" viewBox="0 0 1701 555" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="draw-path" d="M99.4994 1.22266C-192.5 40.2227 222.396 234.991 602.396 155.391C1077.4 55.8906 1157.4 143.891 1176.4 224.391C1195.4 304.891 1098.4 353.391 997.396 304.891C896.396 256.391 937.336 55.5962 1095.9 48.8906C1525.5 30.7227 1852 527.223 1624.5 553.223" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
                        <div className='opacity-60'>
                            <p className='text-9xl font-bold italic heding-font'>Thane</p>
                            <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>

                        </div>
                        <img src={Thane} className='w-full' alt="" />
                    </div>


                    <div class=" ms-24 -mt-7 -mb-[14rem]">
                        <svg width="894" height="632" viewBox="0 0 894 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="draw-path2" d="M63.4996 630.723C-60.5009 630.723 27.7399 450.842 92.9996 384.723C169 307.723 387.5 333.223 336 384.723C278.913 438.524 308.883 223.84 360 144.723C418.438 54.2764 671 87.7233 608.5 25.2236C533.424 -49.8523 561.522 260.778 660.5 281.723C759.478 302.669 805.432 -4.84813 892.5 1.723" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                    <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
                        <img src={Kochi} className='w-full' alt="" />
                        <div className='opacity-60'>
                            <p className='text-9xl font-bold italic heding-font'>Kochi</p>
                            <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>
                        </div>
                    </div>


                    <div class=" flex justify-end me-24 -mt-[4.4rem] -mb-[16rem]">
                        <svg width="1001" height="650" viewBox="0 0 1001 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="draw-path3" d="M42.001 1.72287C107.852 -5.88622 153.972 49.2138 99.6376 115.948C31.7194 199.366 -26.617 135.394 17.0649 115.948C60.7467 96.5028 328.766 115.724 255.001 220.224C181.236 324.724 509.483 284.278 561.901 260.887C614.319 237.496 634.046 184.796 618.828 164.224C603.61 143.651 563.028 143.933 565.001 179.724C566.974 215.515 644.001 240.224 705.346 230.451C778.027 218.873 880.201 157.524 943.001 236.724C1021.5 335.724 1022.5 536.223 922.001 648.223" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </div>

                    <div className='grid grid-cols-2 mx-36 gap-16 content visible'>
                        <div className='opacity-60'>
                            <p className='text-9xl font-bold italic heding-font'>Thiruvalla</p>
                            <p className='text-xl w-11/12 leading-8'>Lorem ipsum dolor sit amet consectetur. Pellentesque pulvinar vitae et sed elit mattis cursus tristique at. Fringilla eu nisi amet sociis. Erat facilisi amet semper faucibus vitae nunc vitae sed. Ultrices tristique congue hac at senectus diam. Blandit eu consectetur mauris orci libero. Sit suspendisse nisl in mattis ultricies convallis diam sit enim.</p>
                        </div>
                        <img src={Thiruvalla} className='w-full' alt="" />
                    </div>


                    <div class="  h-20">
                    </div>
                    {/* Images and Contents End*/}
                </div>
            </div>
        </>
    )
}

export default Ourpresence