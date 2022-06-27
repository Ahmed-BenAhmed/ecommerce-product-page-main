import React from "react"
import Header from "./Header"
import "../styles/productPage.css"
import ProductImages from "./ProductImages"
import ProductInfo from "./ProductInfo"

const product = {
    company: "Sneaker Company",
    pName:"Fall Limited Edition Sneakers",
    pDescription:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    pPrice:"125.00",
    oldPrice:"250.00",
    pSale:"50%",
    pImages: [
        {
            id: 1,
            srcImg: "image-product-1"
        },
        {
            id: 2,
            srcImg: "image-product-2"
        },
        {
            id: 3,
            srcImg: "image-product-3"
        },
        {
            id: 4,
            srcImg: "image-product-4"
        }
    ],
    pThumbs: [
        {
            id: 1,
            srcImg: "image-product-1-thumbnail"
        },
        {
            id: 2,
            srcImg: "image-product-2-thumbnail"
        },
        {
            id: 3,
            srcImg: "image-product-3-thumbnail"
        },
        {
            id: 4,
            srcImg: "image-product-4-thumbnail"
        }
    ]
}
const headerInfo = {
    logo: "../resources/logo.svg",
    navItems: ["Collection","Men","Women","About","Contact"]
}
const ProductPage = ({}) => {
    return( <div className="product-page">
        <Header headerInfo={headerInfo}/>
        <div className="product">
            <ProductImages product={product} />
            <ProductInfo product={product} />
        </div>
    </div>)
}


export default ProductPage