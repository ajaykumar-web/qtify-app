import { React, useState, useEffect } from 'react';
import Card from '../Card/Card';
import style from './TopAlbumCarousel.module.css';
import { fetchTopAlbum } from '../../api/api';

const TopAlbumCarousel = () => {
    const [topAlbum, setTopAlbum] = useState([]);

    const getTopAlbums = async () => {
        try {
            const topAlbumData = await fetchTopAlbum();
            setTopAlbum(topAlbumData.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getTopAlbums();
    }, []);
    return (
        <>
            <div className={style.carouselContainer}>
                <div className={style.carouselItemContainer}>
                    <h3 className={style.carouselHeading}>Top Albums</h3>
                    <h3 className={style.carouselCollapse}>Show all</h3>
                </div>
                <div className={style.carouselItem}>
                    {topAlbum.map((item) => {
                        return <Card key={item.id} data={item} type="albums" />;
                    })}
                </div>
            </div>
        </>
    );
};

export default TopAlbumCarousel;
