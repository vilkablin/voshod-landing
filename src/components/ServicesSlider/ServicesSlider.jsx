"use client";

import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const SLIDES = [
  {
    id: 1,
    title: "Оптика",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: "",
  },
  {
    id: 2,
    title: "Пленка",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: "",
  },
  {
    id: 3,
    title: "Кузов",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: "",
  },
  {
    id: 4,
    title: "Салон",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: "",
  },
];

const ServicesSlider = () => {
  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className='services__wrapper'>
          <Swiper
            className='services-slider'
            spaceBetween={50}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            navigation
            modules={[Navigation, A11y]}
          >
            {SLIDES.map((slide) => {
              return (
                <SwiperSlide
                  className='service-slide'
                  key={`services_${slide.id}`}
                >
                  <h2>{slide.title}</h2>
                  <hr />
                  <p>{slide.text}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
