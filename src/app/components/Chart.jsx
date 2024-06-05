"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { chartData } from '@/utils/constants';


const Chart = () => {

  const [selectChart, setSelectChart] = useState(chartData[1]);

  return (
    <div className='w-[90%] sm:w-[80%] m-auto border border-gray-200 py-5 rounded-3xl'>
      <div className=''>
        <Image style={{width:'100%'}} src={selectChart.img} alt={selectChart.img}/>
      </div>
      <div className='flex justify-center'>
        {chartData.map((chart) => (
          <button
            key={chart.title}
            onClick={() => setSelectChart(chart)}
            style={{
              backgroundColor: selectChart.title === chart.title ? 'black' : '#F6F5F2',
              color: selectChart.title === chart.title ? 'white' : 'black',
              margin: '5px',
              padding: '2px 6px',
              borderRadius:"5px"
            }}
          >
            {chart.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Chart