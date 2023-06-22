import React from 'react'
import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\virtual\\virtual.module.css'
import shade from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\shade.png'
import ReactCompareImage from 'react-compare-image'
import Before  from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\before.png'
import After  from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\after.png'

const Virtual =() =>{
    return (
       <div className={css.virtual}>
        <div className={css.left}>
            <span>Virtual try on </span>
            <span>never buy wrong shade again</span>
            <span>Try now</span>
            <img src={shade} alt="" classname="shadep"/>
        </div>

        <div className={css.right}>
           <div className={css.wrapper}>
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div> 
        </div>
       </div>
    )
}

export default Virtual  ;