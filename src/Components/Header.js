import React from "react"


const Header = ({headerInfo}) => {
    console.log(headerInfo.logo)
    return( <header>
        <div className="logo">
            <img src={headerInfo.logo} alt="logo sneakers" />
        </div>
        <div className="navbar">
            <ul className="nav-items">
                {headerInfo.navItems.map((navItem,i)=><li className="nav-item">
                    <a key={"navItem"+i} className="nav-link" href="#">
                    {navItem}
                    </a>
                </li>)}
            </ul>
        </div>
        <div className="user-cart">
            <div className="cart-icon">
                <img src="../resources/icon-cart.svg" alt="cart" className="icon" />
            </div>
            <div className="cart hidden">
                <div className="cart-header">
                    Cart
                </div>
                <div className="cart-body">
                    Items here
                </div>
            </div>
            <div className="user">
                <img src="../resources/image-avatar.png" alt="avatar" className="avatar" />
            </div>
        </div>
    </header>)
}


export default Header