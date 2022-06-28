import React, { useState } from "react"
import Cart from "./Cart"
import {ReactComponent as MenuIcon} from "../resources/icon-menu.svg"
import {ReactComponent as CloseIcon} from "../resources/icon-close.svg"
const Header = ({headerInfo, product, qInCart,setQInCart}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    return( <header>
                <div className="menu-icon">
                    <MenuIcon className="icon" onClick={()=> setMenuIsOpen(true)}/>
                </div>
                <div className="logo">
                    <img src={headerInfo.logo} alt="logo sneakers" />
                </div>
                <div className={`navbar ${menuIsOpen ? "" : "closed-navbar"}`}>
                    <ul className="nav-items">
                        <CloseIcon className="close-icon icon" onClick={()=> setMenuIsOpen(false)} />
                        {headerInfo.navItems.map((navItem,index)=><li className="nav-item">
                            <a key={"navItem"+index} className="nav-link" href="#">
                            {navItem}
                            </a>
                        </li>)}
                    </ul>
                </div>
                <Cart product={product} qInCart={qInCart} setQInCart={setQInCart}/>
            </header>)
}


export default Header