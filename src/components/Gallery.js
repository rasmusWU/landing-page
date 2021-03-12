// src/components/Carousel.js

import Carousel from 'react-grid-carousel';
import CarouselItem from './CarouselItem';

function Gallery() {
    return (
        <Carousel cols={1}
        rows={1}
        gap={0}
        loop 
        containerStyle={{

        }}>
            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/800/400?random=0"
                copy="Vær med fra starten!"
                ctaLink="/founders"
                ctaCopy="Klik her, hvis du vil være nede med de fede" />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/800/400?random=1"
                copy="Vil du gerne være klogere?"
                ctaLink="/news-letter"
                ctaCopy="Få gratis nyheder" />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/800/400?random=2"
                copy="amogus"
                ctaLink="/amogus"
                ctaCopy="sus" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery;