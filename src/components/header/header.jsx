import React , {usestate} from 'react'
import css from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\components\\header\\header.module.css'
import {CgShoppingBag} from 'react-icons/cg'
import Logo from 'C:\\Users\\KHANAK\\amazon-starterpack\\src\\assets\\logo.png'
import {GoThreeBars} from 'react-icons/go'
const Header = () => {

    
    return (
        <div className={css.container}>
            <div className={css.logo}>
               <img src= {Logo} alt="logo" />
               <span>servicio</span>
            </div>

            <div className={css.right}>
                <div className={css.bars}>
                    <GoThreeBars/>
                </div>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Collection</li>
                        <li>Top Brands</li>
                        <li>Offers</li>
                        <li>Latest</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <input type="text" className={css.search}  placeholder='Search'/>
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    ) 
}

export default Header 