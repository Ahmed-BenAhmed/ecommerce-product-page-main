import React, { useState } from "react"
import {ReactComponent  as IconCart} from "../resources/icon-cart.svg"
import {ReactComponent as IconDelete} from "../resources/icon-delete.svg"

const Cart = ({product, qInCart, setQInCart}) => {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    return <div className="user-cart">
            <div className="cart-icon" onClick={()=>{setCartIsOpen(!cartIsOpen)}}>
                <IconCart className="icon" />
                {qInCart > 0 ? <div className="cart-q">{qInCart}</div> : "" }
            </div>
            <div className={`cart ${cartIsOpen ? "" : "hidden"}`}>
                <div className="cart-header">
                    <b>Cart</b>
                </div>
                <div className="cart-body">
                    {qInCart > 0 ?
                        <div className="product-in-cart">
                            <div className="products">
                                <img src="../resources/image-product-1-thumbnail.jpg" alt="product image" />
                                <div className="p-details">
                                    <h4>{product.pName}</h4>
                                    <span>${product.pPrice} x {qInCart} <b>${qInCart * product.pPrice}</b></span>
                                </div>
                                <IconDelete className="icon delete-icon" onClick={()=>{setQInCart(0); setCartIsOpen(false)}}/>
                            </div>
                            <div className="checkout-btn">
                                <button className="btn">Checkout</button>
                            </div>
                        </div>
                        :
                        <div>Cart is empty!</div>
                    }
                </div>
            </div>
            <div className="user">
                <img src="../resources/image-avatar.png" alt="avatar" className="avatar" />
            </div>
        </div>
}

export default Cart