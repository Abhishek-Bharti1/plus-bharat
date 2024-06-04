import React from 'react'

const CommonButton = ({text}) => {
  return (
      <button 
        className='sm:block sm:m-auto bg-[#A91D3A] text-white px-4 py-2 font-semibold rounded-3xl'>
          {text}
      </button>
  )
}

export default CommonButton