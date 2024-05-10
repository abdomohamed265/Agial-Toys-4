import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./index.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Ondemand = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='text-center mt-5 pt-5'>منتجات علي حسب الطلب</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src='\img\images\IMG-20240322-WA0034.jpg' alt='' />
            
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240322-WA0035.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240429-WA0030.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240430-WA0018.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240429-WA0037.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240429-WA0038.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='\img\images\IMG-20240429-WA0029.jpg' alt='' />
          </SwiperSlide>
          <div className="slider-controler" style={{ marginRight: "450px", marginTop: "20px" }}>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Ondemand;