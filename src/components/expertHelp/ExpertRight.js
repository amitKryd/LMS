
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../images/roundedbar.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export const ExpertRight = () =>{
  return (
    <>
      <div className='mx-10 mt-10'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper  ">
        <SwiperSlide  >
            <div className=''>
                <img className='h-[500px] '
                    src={img1}
                    class=""
                    alt=""
                />
            </div>
        </SwiperSlide>
        <SwiperSlide  >
            <div>
                <img className='h-[600px] w-75'
                    src={img1}
                    class=""
                    alt=""
                />
            </div>
        </SwiperSlide>
        
        

      </Swiper>
      </div>
    </>
  );
}




