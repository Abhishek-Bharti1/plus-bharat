"use client";
import Image from "next/image";
import React from "react";
import EN from "../../../public/enTracker.png";
import ENLOGO from "../../../public/entrackerLogo.svg";
import FORBES from "../../../public/forbes.png";
import FORBESLOGO from "../../../public/forbeslogo.svg";
import TIME from "../../../public/timeApplaudLogo.svg";
import TIMENEWS from "../../../public/timesApplaudNewsPic.png";
import YOURSTORY from "../../../public/yourstory.svg";
import YOURSTORYNEWS from "../../../public/yourstoryNewsPic.png";
import Slider from "react-slick";
const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
const SocialMedia = () => {
  const data = [
    {
      bg: EN,
      logo: ENLOGO,
      desc: "Plus launches a new savings app with exclusive and attractive offers for India’s jewellery purchasers",
      link: "https://entrackr.com/2023/08/jewellery-savings-app-plus-raises-350k-in-seed-round/",
    },
    {
      bg: FORBES,
      logo: FORBESLOGO,
      desc: "Plus disrupts Indias gold market, Democratising a timeless asset",
      link: "https://www.forbesindia.com/article/brand-connect/plus-disrupts-indias-gold-market-democratising-a-timeless-asset/91835/1",
    },
    {
      bg: TIMENEWS,
      logo: TIME,
      desc: "Know how the Plus app helps Indian homemakers save for jewellery and gold",
      link: "https://timesapplaud.com/know-how-the-plus-app-helps-indian-homemakers-save-for-jewellery-and-gold/",
    },
    {
      bg: YOURSTORYNEWS,
      logo: YOURSTORY,
      desc: "This savings app helps users plan for their next jewellery purchase",
      link: "https://yourstory.com/2023/01/this-savings-app-helps-users-plan-for-their-next-jewellery-purchase",
    },
  ];

  return (
    <div className="mb-20 mt-20">
      <div className="text-center mb-10 sm:mb-5 text-5xl w-[90%] m-auto font-bold ">
        The media loves Plus
      </div>
      <div className="text-center mb-20 text-xl w-[90%] m-auto tracking-wider">
        Top publications & news media talks about us
      </div>

      <div className="slider-container sm:w-[85%] lg:w-[70%] m-auto">
          <Slider {...settings}>
        {data?.map((el, index) => (
            <a href={el.link} target="_blank" className="cursor-pointer">
              <div className="pt-3 pb-10 pr-3 pl-3 border border-orange-200 text-center bg-[#FAF8F1] w-[300px] rounded-3xl">
                <Image className="block m-auto mb-5" src={el.bg} alt={el.bg} />
                <div className="mb-10">{el.desc}</div>
              </div>
              <div className="mr-[50px]">
                <Image
                  className="block m-auto border-5 border-[#ffeeda]-500 p-3 mt-[-30px] bg-[#ffffff] rounded-lg"
                  width={150}
                  height={100}
                  src={el.logo}
                  alt={el.logo}
                />
              </div>
            </a>
        ))}
          </Slider>
      </div>
    </div>
  );
};

export default SocialMedia;
