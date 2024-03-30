
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../images/Frame 102 .png"
import img2 from "../../images/compo2.jpg"
import img3 from "../../images/comp.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const ExpertRight = () =>{
  return (
    <>
      <div className='Expert container mt-10'>
      <Swiper
          effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      
        grabCursor={true}

       
        className="mySwiper  ">
      
        <SwiperSlide  >
            <div>
                <img className='max-sm:min-h-[500px] max-sm:max-h-[500px] min-h-[600px] max-h-[660px] '
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
