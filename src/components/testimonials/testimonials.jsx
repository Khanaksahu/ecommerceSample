import React from 'react'
import TestimonialHero from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\testimonialHero.png'
import {TestimonialsData} from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\data\\testimonials.js'
import {Swiper ,SwiperSlide }  from 'swiper/react'

import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\testimonials\\testimonials.module.css'
const Testimonials =() => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated </span>
                    <span>DCKOIFMNB 
                        VFBMEM
                    </span>
                    </div>
            
            <img src={TestimonialHero} alt="" />

            <div className={css.container}>
                <span>10k</span><span>Happy Customers </span>
            </div>
            </div>

            <div className={css.reviews}>
                <span>Reviews</span>
            </div>

            <div className={css.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tcarousal}

                >
                    {
                    TestimonialsData.map((testimonial , i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt=" "/>
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                    
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonials ;