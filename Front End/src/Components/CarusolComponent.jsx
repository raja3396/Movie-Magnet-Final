import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarusolComponent(){
    const[carouselImages, setCarouselImages] = useState([
        { imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg", alt: "truck-loadImg" },
        { imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1710850186551_pvrpassport349bmsbannerwebbanner1.jpg", alt: "truck-loadImg" },
        { imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1709211804201_redlorryweb.jpg", alt: "truck-loadImg" },
        { imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg", alt: "truck-loadImg" },
        { imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1710850186551_pvrpassport349bmsbannerwebbanner1.jpg", alt: "truck-loadImg" }
    ]);

    return (
        <div className='carusol-container'>
            <Carousel style={{ width: '100%', overflow: 'hidden' }} interval={2000} pause={false}>
                {carouselImages.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.imageUrl}
                            alt={image.alt}
                            style={{ objectFit: 'cover', maxHeight: 'calc(100vh - 56px)' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
