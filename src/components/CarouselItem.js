// src/components/CarouselItem.js

import './CarouselItem.scss';
import Carousel from 'react-grid-carousel';

function CarouselItem({ image, copy, ctaLink, ctaCopy }) {
    return (
        <Carousel.Item>
                <div className="">
                    <img src={image} alt="" className="carouselItem__image"/>
                    <div className="carouselItem__content">
                        <p className="carouselItem__copy">{copy}</p>
                        <a href={ctaLink} className="carouselItem__CTA">{ctaCopy}</a>
                    </div>
                </div>
            </Carousel.Item>
    )
}

export default CarouselItem;