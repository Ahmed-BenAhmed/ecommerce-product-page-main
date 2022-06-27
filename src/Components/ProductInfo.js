import React, { useState } from "react"

const ProductInfo = ({product}) => {
    const {company,pName,pDescription,pPrice,oldPrice,pSale} = product
    const [qInCart, setQInCart] = useState(0)
    return <div className="p-info">
            <div className="p-details">
                <span className="orange">{company.toUpperCase()}</span>
                <h2 className="p-name">{pName}</h2>
                <p className="p-description">{pDescription}</p>
                <h4 className="p-price">${pPrice} <span className="sale">{pSale}</span></h4>
                <span className="old-price">${oldPrice}</span>
            </div>
            <div className="d-flex">
                <div className="quantity">
                    <button className="q-btn"onClick={()=>{if(qInCart > 0)setQInCart(qInCart-1)}}>
                        <img src="../resources/icon-minus.svg" alt="cart icon" className="minus-icon" />
                    </button>
                    <span className="q-in-cart">{qInCart}</span>
                    <button className="q-btn"  onClick={()=>{setQInCart(qInCart+1)}} >
                        <img src="../resources/icon-plus.svg" alt="cart icon" className="plus-icon" />
                    </button>
                </div>
                <div className="add-to-cart">
                    <button className="btn">
                        <img src="../resources/icon-cart-white.svg" alt="cart icon" className="icon" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
}

export default ProductInfo