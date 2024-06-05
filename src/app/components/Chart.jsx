import Image from 'next/image'
import React from 'react'
import CHART from "../../../public/chart.png"
const Chart = () => {
  return (
    <div>
        <Image
            src={CHART}
        />
    </div>
  )
}

export default Chart