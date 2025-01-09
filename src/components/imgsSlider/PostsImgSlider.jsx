import React, { useState } from "react";
import { SwiperSlide, useSwiper } from "swiper/react";
import { Thumbs, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
export default function PostsImgSlider({ imagesUrl }) {
  const swiper = useSwiper();
  return (
    <Swiper
      grabCursor={true}
      pagination={{ clickable: true, bulletActiveClass: "!bg-secondary" }}
      // navigation={true}
      spaceBetween={10}
      // scrollbar={{ draggable: true }}
      navigation={{
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
      }}
      // thumbs={{ swiper: activeThumb }}
      modules={[Pagination, Navigation]}
      className="mb-3"
    >
      {imagesUrl &&
        imagesUrl.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              className="object-cover h-full w-full rounded"
              src={img.url}
              alt=""
            />
          </SwiperSlide>
        ))}
      {/* {imagesUrl.length > 1 && ( */}
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
        </button>{" "}
      </>
      {/* )} */}
    </Swiper>
  );
}
