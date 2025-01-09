import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useSwiper } from "swiper/react";

export default function CustomBotton() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slideNext()}
        className="custom-button-next absolute top-1/2 -translate-y-1/2 z-10 right-0 p-px"
      >
        <IoIosArrowDroprightCircle className=" text-3xl" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="custom-button-prev absolute top-1/2 -translate-y-1/2 z-10 left-0 p-px"
      >
        <IoIosArrowDropleftCircle className=" text-3xl" />
      </button>
    </>
  );
}
