import React from 'react'

function About() {
  return (
    <>
      <div className='w-full mt-20'>
        <p className='text-center text-3xl'>About</p>
        <p className='capitalize py-10 font-bold bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text text-center text-7xl'>National Builders</p>
      </div>
      <div className='h-[90vh] w-full mx-auto container mt-20 '>
        <div className='rounded-[3rem] h-full p-10 bg-gray-900 flex'>
          <div className='bg-black w-full h-full rounded-s-[1rem] rounded-b-[2rem] p-14'>
            <p className='text-6xl leading-tight bg-gradient-to-r from-white to-gray-600  text-transparent bg-clip-text ' style={{ wordSpacing: '0.2em' }}><span className='text-red-500'>Expression</span> of Excellent Living</p>
            <p className='pt-6 leading- text-justify text-xl opacity-65 z-1'>A visionary real estate development firm, National Builders specializes in pioneering architecturally distinct residential and mixed-use projects in India’s prime metropolitan markets of Navi Mumbai and Kerala.</p>
            <p className='pt-6 leading- text-justify text-xl opacity-65 z-1' > The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality and delivery of best-in-class features is visible in each of the 135+ projects of National Builders – from the 6500-sq. ft. luxury homes in Vivant – the tallest tower in the satellite city of Navi Mumbai and the 3,000 sq. ft. Sky Villas in the 20-storeyed National Kingdom at Cochin, right to the 600 sq. ft. apartments in projects for home buyers with a select budget. From the premium addresses of Palm Beach Road in Navi Mumbai and Palarivattom in Cochin, to the emerging areas of New Panvel and NAINA region, the projects of National Builders dot prime locations in the two key markets. At National Builders, superiority in quality, culture of innovation and long-term sustainability are the key focus areas for operational excellence. The philosophy behind every National home is simple – live the values, and create genuine value for all stakeholders.</p>
          </div>
          <div className='w-8/12 bg-yellow-300 rounded-e-[1rem] h-5/6'>image</div>
        </div>
      </div>
      <div className=''>
        fds
      </div>
    </>
  )
}

export default About