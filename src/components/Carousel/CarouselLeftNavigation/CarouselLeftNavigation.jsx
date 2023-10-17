import React, { useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import { useState } from 'react';
import styles from '../Carousel.module.css';
import { ReactComponent as LeftArrow } from '../../../assests/left-arrow.svg';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);
    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
};

export default CarouselLeftNavigation;
