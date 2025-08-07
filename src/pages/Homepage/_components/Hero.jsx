import React from "react";
import Image from "../../../assets/hero.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventBanner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] max-w-7xl mx-auto mt-5 overflow-hidden rounded-2xl">
      {/* Background Image */}
      <img
        src={Image}
        alt="Event Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay — rasmni yumshoqroq qilish uchun */}
     

      {/* Kontent */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-end p-5 sm:p-6 h-full text-white">
        {/* Chap tomon: Sarlavha va Batafsil tugmasi */}
      <div className="flex-1 flex flex-col justify-end space-y-3 sm:space-y-4 w-full md:w-1/2">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="font-extrabold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-tight tracking-[0%] font-inter">
              Janubiy Koreyadagi <br /> vatandoshlarimiz bilan muloqot
            </h1>
            <button className="bg-white w-fit hover:bg-[#009688] text-[#009688] hover:text-white px-5 sm:px-6 py-2 rounded-lg transition duration-300 shadow-md font-bold text-[14px] sm:text-[15px] text-center font-inter self-start">
              Batafsil
            </button>
          </div>
        </div>

        {/* O'ng tomon: Tugmalar (faqat md va undan kattalarda ko'rinadi) */}
        <div className="hidden md:flex space-x-3 mt-6 md:mt-0">
          <button className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-[#009688] border border-white border-opacity-30 w-[48px] h-[48px] flex justify-center items-center hover:bg-[#009688] hover:text-white rounded-full transition duration-300 shadow-md">
            <ChevronLeft size={20} />
          </button>
          <button className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-[#009688] border border-white border-opacity-30 w-[48px] h-[48px] flex justify-center items-center hover:bg-[#009688] hover:text-white rounded-full transition duration-300 shadow-md">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;