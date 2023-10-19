import React, { useState } from 'react';
import style from './CarouselSection.module.css';
import CustomCard from '../CustomCard/CustomCard';
import Carousel from '../Carousel/Carousel';
import { CircularProgress } from '@mui/material';

const Section = ({ title, data, type }) => {
    console.log(title);
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className={style.sectionContainer}>
            {type !== 'songs' ? (
                <div className={style.pageHeader}>
                    <h3 className={style.sectionLabel}>{title}</h3>
                    <h3 className={style.toggleLink} onClick={handleToggle}>
                        {toggle ? 'Collapse' : 'Show all '}
                    </h3>
                </div>
            ) : (
                <>{null}</>
            )}
            {data?.length ? (
                <div className={style.cardContainer}>
                    {!toggle ? (
                        <div className={style.contentWrapper}>
                            <h3 className={style.toggleLink}>
                                Content is Collapsed please click on show all.
                            </h3>
                        </div>
                    ) : (
                        <Carousel
                            data={data}
                            renderCardComponent={(item) => (
                                <CustomCard data={item} type={type} />
                            )}
                        />
                    )}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Section;
