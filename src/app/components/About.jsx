import CommonButton from "./commonComponents/CommonButton";
import Image from "next/image";
import HEADER from "../../../public/aboutLogo.svg";
import CASH from "../../../public/cash.svg";
import NPCI from "../../../public/npci.svg";
import SONABG from "../../../public/sonaBg.svg";
import SONAIMG from "../../../public/sonaImg.svg";

const About = () => {
  return (
    <div
      className="
            bg-[#fffbe4] 
            mt-[60px] 
            sm:mt-[100px] 
            md:mt-[110px] 
            lg:mt-[130px]
            flex flex-col lg:flex-row lg:justify-between
            px-[3%] sm:px-[20%] lg:px-[10%]
            py-[12%] sm:py-[4%]
            border-b border-fffbe4
        "
    >
      <div className="lg:block sm:flex sm:flex-col sm:justify-center sm:items-center">
        <p className="text-2xl sm:text-3xl font-semibold lg:mt-20">
          Save smartly in
        </p>
        <p className="text-7xl sm:text-8xl text-[#F7C566] font-bold tracking-wider">
          GOLD
        </p>
        <p className="text-md sm:text-xl">And get 10% extra gold every year!</p>
        <div className="flex flex-col sm:flex-row gap-5 mt-5">
          <div>
            <CommonButton text={"Start Saving Now"} />
          </div>
          <div>
            <button className="border-2 border-gray bg-[white] text-black px-5 py-2 font-normal rounded-3xl">
              Trusted by 2Lakh + Indians
            </button>
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row gap-5">
          <p className="text-gray-500">Powered by</p>
          <p className="flex gap-5">
            <Image src={HEADER} alt={HEADER} />
            <Image src={CASH} alt={CASH} />
            <Image src={NPCI} alt={NPCI} />
          </p>
        </div>
      </div>
      <div className="relative  lg:block sm:flex sm:flex-col sm:justify-center sm:items-center">
        <Image src={SONABG} alt={SONABG} />
        <Image
          className="absolute top-0 left:[5%] sm:left-[10%]"
          src={SONAIMG}
          alt={SONAIMG}
        />
      </div>
    </div>
  );
};

export default About;
