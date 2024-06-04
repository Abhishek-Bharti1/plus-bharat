import Image from 'next/image'
import React from 'react'
import companies from "../../../public/companies.png"

const TrustedBy = () => {
  return (
    <div className='mt-20 sm:w-[90%] m-auto lg:w-[85%]'>
        <div className='text-center mb-5 sm:mb-5 text-5xl w-[90%] m-auto font-bold'>
            Trusted by the best Jewellers
        </div>
      <div className='text-center mb-10 text-xl w-[90%] m-auto'>
      Redeem your savings at more than 1000 stores across 520+ cities
    </div>
        <Image src={companies} alt='companies'/>
    </div>
  )
}

export default TrustedBy