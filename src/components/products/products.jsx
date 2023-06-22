import React, { useState } from 'react'
import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\products\\products.module.css'
import plane from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\plane.png'
import {ProductsData } from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\data\\products.js'
 import {useAutoAnimate} from '@formkit/auto-animate/react'
 
const Products =() => {
     const[parent] = useAutoAnimate() 

     const [MenuProducts , setMenuProducts ] = useState(ProductsData)

     const filter =(type) => {
        setMenuProducts(ProductsData.filter((product) =>product.type===type))
     }
    return (
       <div className={css.container}>
        <img src={plane} alt="" /> 
        <h1> OUR FEATURED PRODUCTS </h1>
        <div className={css.products}>
            <ul className={css.menu}>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Hair Care</li>
            <li onClick={()=>filter("foundation")}>Make Up </li>
            </ul>
            <div className={css.list} ref={parent}>
                 {
                    MenuProducts.map((product , i)=>(
                        <div className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>{product.price}$</span>
                                <div>SHOP NOW</div>
                        </div>
                        <img src={product.img} alt=""  classname="img-p"/> 
                        </div> 
                    ))
                 }
            </div>

        </div>
       </div>
    )
}

export default Products ; 