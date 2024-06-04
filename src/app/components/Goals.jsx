'use client';
import { useState } from 'react';

const Goals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: 'Upcoming Wedding', price: '₹ 200 / Day', image: '/path-to-wedding-image.png' },
    { title: 'Dhanteras', price: '₹ 150 / Day', image: '/path-to-dhanteras-image.png' },
    { title: 'Akshaya Tritiya', price: '₹ 100 / Day', image: '/path-to-akshaya-tritiya-image.png' }
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex items-center justify-center h-80 w-full">
      <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-300 rounded-full">‹</button>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`flex-none w-full flex justify-center items-center transition-all ${index === currentIndex ? 'scale-110' : 'scale-100'}`}>
            <div className="text-center">
              <img src={slide.image} alt={slide.title} className="mx-auto" />
              <h3 className="mt-4 text-lg font-semibold">{slide.title}</h3>
              <p>{slide.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-300 rounded-full">›</button>
    </div>
  );
};

export default Goals;
