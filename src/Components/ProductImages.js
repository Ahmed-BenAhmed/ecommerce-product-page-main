import React, { useState } from "react"

const ProductImages = ({product}) => {
    const [activeImg, setActiveImg] = useState(1)
    const {pImages,pThumbs} = product
    return <div className="p-images">
            <div className="main-image">
                <img src={`../resources/${pImages.filter(pImg => pImg.id === activeImg)[0].srcImg}.jpg`} alt="Product Image" />
            </div>
            <div className="explore-images">
                {pThumbs.map(Pthumb => <div key={"thumb"+Pthumb.id} className={`p-thumb ${Pthumb.id === activeImg ? "activeThumb":""}`}>
                    <img 
                    src={`../resources/${Pthumb.srcImg}.jpg`} 
                    alt={Pthumb.srcImg} 
                    className={`thumb-img`}
                    onClick={()=> setActiveImg(Pthumb.id)} />
                </div>)}
            </div>
        </div>
}

export default ProductImages