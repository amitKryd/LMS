
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img2 from "../../../../images/image (1).png"
import img3 from "../../../../images/compo2.jpg";
import img1 from "../../../../images/Group 7.png"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const AboutLeft = () =>{
  return (
    <>
      <div className='About container mx-16 '>
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
                <img className='min-h-[600px] rounded-t-full rounded-b-full border-2 border-gray-800   w-75'
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



