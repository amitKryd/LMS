
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import img2 from "../../../../assests/images/image (1).png"
import img3 from "../../../../assests/images/compo2.jpg";
import img1 from "../../../../assests/images/Group 7.png"




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const AboutLeft = () =>{
  return (
    <>
      <div className='About container  '>
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
                <img className='min-h-[500px] max-h-[500px] max-sm:w-[280px]'
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




