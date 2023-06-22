import React from 'react' ;
// eslint-disable-next-line no-unused-vars
import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\slider\\slider.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Pagination , Navigation } from 'swiper'
import 'swiper/css' ;
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {SliderProducts} from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\data\\products.js'

const Sliderm = ()=>{
    return (
       <div className="s-container">
                <Swiper
                modules ={[Navigation, Pagination]}
                className='myswiper'
                navigation={true}
                loopFillGroupWithBlank={true}
                 slidesPerView={3}
                 slidesPerGroup={1}
                 spaceBetween={40}
                 loop={true }
                 >
                    {SliderProducts.map((slide, i)=>
                       ( <SwiperSlide>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                            </div>

                            <img src={slide.img} alt ="product" classname="img-p" />
                       </SwiperSlide>
                    ))}
                    
                

                </Swiper>
       </div>
    )
}

export default Sliderm 