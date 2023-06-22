import React from 'react' ;
import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\hero\\hero.module.css' ;
import heroImg from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\hero.png';
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero =() => {
    const transition = {duration : 3  ,type :"spring"}
    return (
       <div className={css.container}>

            <div className={css.h_sides}>
                <span className={css.text1} >home protection</span>
            <div className={css.text2}>
                <span>Trending offers</span>
                <span> this project is just an example the contnet of it will be changed later on depending on the need </span>
            </div>
            </div>

            <div className={css.wrapper}>

                { /* animation   */}
                <motion.div 
                 initial ={{bottom:"2rem"}} 
                 whileInView={{bottom: "0rem"}}
                 className={css.blueCircle}
                 transition={transition}></motion.div>

                { /* animation   */}
                <motion.img src={heroImg} alt="" width = {400} 
                transition={transition}  initial={{bottom:"-2rem"}} whileInView={{bottom:"0rem"}}/>


                <div className={css.cart2}>
                    <RiShoppingBagFill /> 
                    <div className={css.signup}>
                        <span>Best signup offers</span>
                        <div> 
                            <BsArrowRight/> 
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>10k</span>
                    <span>Happy customers</span>
                </div>

            </div>

       </div>
      
    )

}
export default Hero 