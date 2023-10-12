import React from 'react'
import TopAlbumCard from '../TopAlbumCard/TopAlbumCard'
import style from './NewAlbumCarousel.module.css'

const TopAlbumCarousel = () => {
    return (
        <>
            <div className={style.carouselContainer}>
                <div className={style.carouselItemContainer}>
                    <h3 className={style.carouselHeading}>New Albums</h3>
                    <h3 className={style.carouselCollapse}>Show all</h3>
                </div>
                <div className={style.carouselItem}>
                    <TopAlbumCard />
                </div>
            </div>
        </>
    )
}

export default TopAlbumCarousel
