import React from 'react'
import style from './HeroSection.module.css'
import bannerImage from '../../assests/banner-image.svg'

const HeroSection = () => {
    return (
        <>
            <div className={style.heroSection}>
                <div>
                    <h1 className={style.mainHeading1}>
                        100 Thousand Songs, ad-free
                    </h1>
                    <h1 className={style.mainHeading1}>
                        Over thousands podcast episodes
                    </h1>
                </div>
                <div>
                    <img src={bannerImage} alt={bannerImage} />
                </div>
            </div>
        </>
    )
}

export default HeroSection
