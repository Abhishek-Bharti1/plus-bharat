'use client';
import { useState } from 'react';
import { LifeGoalsData } from '@/utils/constants';
import Image from 'next/image';
import CommonButton from './commonComponents/CommonButton';
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Goals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : LifeGoalsData.length - itemsToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < LifeGoalsData.length - itemsToShow ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <div className='text-center mb-10 sm:mb-5 text-5xl w-[90%] m-auto font-bold'>Save for life goals</div>
      <div className='text-center mb-20 text-xl w-[90%] m-auto font-semibold text-gray-500 tracking-wider'>Save in Plus Gold for life events that matter</div>
      <div className={`slider-container sm:w-[85%] lg:w-[80%] m-auto flex justify-between sliderContainer gap-10`}>
        {
          LifeGoalsData.slice(currentIndex, currentIndex + itemsToShow).map((el, index) => (
            <div
              key={index}
              className={`cardContainer" ${index === 1 ? "middleCard" : ''}`}
            >
              <div className='w-[250px] h-[350px] text-center bg-[#F5F7F8] cursor-pointer'>
                <div className='p-5 text-2xl h-[25%] bg-[white]'>{el.title}</div>
                <div className='p-10 bg-[#FCF8E8] h-[75%]'>
                  <Image className='block m-auto' width={100} height={100} src={el.img} alt={el.img} />
                  <p className='text-gray-500 font-semibold mt-2 mb-3'>Starts as low as</p>
                  <p>₹ {el.price} / Day</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center mt-7">
        <button onClick={handlePrev} className="mx-2 px-4 py-2 text-[#A91D3A] text-2xl font-semibold rounded"><MdOutlineKeyboardArrowLeft/></button>
        <button onClick={handleNext} className="mx-2 px-4 py-2 text-[#A91D3A] text-2xl font-semibold rounded"><MdOutlineKeyboardArrowRight/></button>
      </div>
      <div className='mt-10 mb-10 ml-[120px] sm:ml-0'><CommonButton text={'Start Saving Now'} /></div>
    </div>
  );
};

export default Goals;
