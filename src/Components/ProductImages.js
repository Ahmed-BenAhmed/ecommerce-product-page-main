import React, { useState } from "react"
import {ReactComponent as NextIcon} from "../resources/icon-next.svg"
import {ReactComponent as PreviousIcon} from "../resources/icon-previous.svg"
import {ReactComponent as CloseIcon} from "../resources/icon-close.svg"

const ProductImages = ({product}) => {
    const [activeImg, setActiveImg] = useState(1)
    const [browseImagesMood, setBrowseImagesMood] = useState(false)
    const {pImages,pThumbs} = product
    return <div className={`p-images`}>
            <div className="main-image">
                <NextIcon className={`icon next-icon`} onClick={()=>{activeImg < 4 ? setActiveImg(activeImg + 1) : setActiveImg(1)}}/>
                <PreviousIcon className={`icon prev-icon`} onClick={()=>activeImg > 1 ? setActiveImg(activeImg - 1) : setActiveImg(4)} />
                <img 
                    src={`../resources/${pImages.filter(pImg => pImg.id === activeImg)[0].srcImg}.jpg`}
                    alt="Product Image"
                    onClick={()=>{setBrowseImagesMood(true)}}
                     />
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
            <div className={browseImagesMood ? "background-overlay" : "hidden"}></div>
            <div className={`browse-images ${browseImagesMood ? "image-mood" : "hidden" }`}>
                <div className="main-image-browsing">
                    <CloseIcon className="icon close-image-icon" onClick={()=>setBrowseImagesMood(false)} />
                    <NextIcon className={`icon next-icon`} onClick={()=>{activeImg < 4 ? setActiveImg(activeImg + 1) : setActiveImg(1)}}/>
                    <PreviousIcon className={`icon prev-icon`} onClick={()=>activeImg > 1 ? setActiveImg(activeImg - 1) : setActiveImg(4)} />
                    <img 
                        src={`../resources/${pImages.filter(pImg => pImg.id === activeImg)[0].srcImg}.jpg`}
                        alt="Product Image"
                        onClick={()=>{setBrowseImagesMood(true)}}
                        />
                </div>
                <div className="explore-image-browsing">
                    {pThumbs.map(Pthumb => <div key={"thumb"+Pthumb.id} className={`p-thumb ${Pthumb.id === activeImg ? "activeThumb":""}`}>
                        <img 
                        src={`../resources/${Pthumb.srcImg}.jpg`} 
                        alt={Pthumb.srcImg} 
                        className={`thumb-img`}
                        onClick={()=> setActiveImg(Pthumb.id)} />
                    </div>)}
                </div>
            </div>
        </div>
}

export default ProductImages