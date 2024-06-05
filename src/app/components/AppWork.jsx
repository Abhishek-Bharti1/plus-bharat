import React from "react";
import Image from "next/image";
import { AppWorkData1, AppWorkData2 } from "@/utils/constants";

const AppWork = () => {
 
  return (
    <div className="mt-16">
      <div>
        <p className="text-center text-5xl font-semibold">
          How does the app work
        </p>
        <p className="mt-5 text-center text-xl">
          Watch our short videos to learn more about our app
        </p>

        <div className="mt-10 rounded-3xl container w-[90%] lg:w-[85%] mx-auto px-4 py-5 border border-orange-200 bg-[#FAF8F1]">
          <div className="flex flex-wrap justify-center">
            {AppWorkData1?.map((el, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center"
              >
                <div className="flex items-center justify-center flex-col gap-5">
                  <Image
                    className="border border-orange-200 rounded-3xl"
                    src={el.image}
                    alt={el.image}
                  />
                  <p className="text-2xl font-semibold">{el.title}</p>
                  <p className="mt-[-12px] text-gray-500">{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] sm:w-[80%] lg:w-[85%] m-auto mt-10 grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5 lg:gap-10">
          {AppWorkData2?.map((el, index) => (
            <div className="flex gap-5 items-center border border-orange-200 bg-[#FAF8F1] rounded-3xl px-2 py-2" key={index}>
              <div>
                <Image src={el.image} alt={el.image} />
              </div>
              <div className="text-lg">
                <p>{el.title}</p>
                <p>{el.title2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWork;
