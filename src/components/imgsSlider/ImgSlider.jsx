import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CustomBotton from "./CustomBotton";

export default function ImgSlider({ images }) {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true }}
        spaceBetween={10}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        thumbs={{ swiper: activeThumb }}
        modules={[Thumbs, Navigation]}
        className="mb-3"
      >
        {images &&
          images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="relative overflow-hidden px-8 bg-accentHover "
            >
              <div className="w-[100%] pt-[100%] overflow-hidden relative">
                <img
                  className="top-0 left-0 absolute w-full h-full object-cover"
                  src={img.url}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}

        <CustomBotton />
        {/* <div className="custom-button-prev">
          <CustomPrevButton />
        </div> */}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        // loop={true}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Thumbs, Navigation]}
      >
        {images &&
          images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="relative overflow-hidden cursor-pointer  "
            >
              <div className="w-[100%] pt-[100%] overflow-hidden relative ">
                <img
                  className="top-0 left-0 absolute w-full h-full object-fill rounded-md"
                  src={img.url}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
