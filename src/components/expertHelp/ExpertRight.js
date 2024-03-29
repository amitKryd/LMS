
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../images/image (1).png"
import img2 from "../../images/Group_one.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const ExpertRight = () =>{
  return (
    <>
      <div className='mx-16 mt-10'>
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
        <SwiperSlide  >
            <div>
                <img className='min-h-[600px] rounded-t-full rounded-b-full border-2 border-gray-800   w-75'
                    src={img2}
                    class=""
                    alt=""
                />
            </div>
        </SwiperSlide>
        <SwiperSlide  >
            <div>
                <img className='min-h-[600px] max-h[500px] rounded-t-full rounded-b-full border-2 border-gray-800   w-75'
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




