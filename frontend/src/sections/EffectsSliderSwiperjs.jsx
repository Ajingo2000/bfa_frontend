import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../assets/css/effects-slider.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const EffectsSliderSwiperjs = () => {
  return (
    <section className='w-full p-5 h-96'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Church Construction</SwiperSlide>
        <SwiperSlide>Infrastructure Planning</SwiperSlide>
        <SwiperSlide>Mission Trips</SwiperSlide>
        <SwiperSlide className='box-shadow'>Soul Winning</SwiperSlide>
        <SwiperSlide>Ministry Resources</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default EffectsSliderSwiperjs
