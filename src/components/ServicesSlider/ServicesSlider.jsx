"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import image1 from "../../assets/images/7.jpg";
import image2 from "../../assets/images/15.jpg";
import image3 from "../../assets/images/16.jpg";
import image4 from "../../assets/images/17.jpg";
import Divider from "../Divider/Divider";

const SLIDES = [
  {
    id: 1,
    title: "Оптика",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: image3,
  },
  {
    id: 2,
    title: "Пленка",
    text: "Оклейка, бронирование и тонировка автомобиля",
    href: "/services/optic",
    image_url: image2,
  },
  {
    id: 3,
    title: "Кузов",
    text: "Оклейка антигравийной и виниловой пленками",
    href: "/services/optic",
    image_url: image1,
  },
  {
    id: 4,
    title: "Салон",
    text: "Бронирование, тонировка, оклейка, полировка",
    href: "/services/optic",
    image_url: image4,
  },
];

const ServicesSlider = () => {
  return (
    <section className='services' id='services'>
      <div className='container'>
        <div className='services__wrapper'>
          <Swiper
            className='services-slider'
            slidesPerView={3}
            spaceBetween={32}
          >
            {SLIDES.map((slide) => {
              return (
                <SwiperSlide className='service' key={slide.id}>
                  <Image
                    src={slide.image_url}
                    alt={slide.title}
                    className='service__image'
                  />
                  <div className='service-content'>
                    <h2 className='service__title'>{slide.title}</h2>
                    <Divider />
                    <p className='service__text'>{slide.text}</p>
                  </div>
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
