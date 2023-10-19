import React from 'react';
import styles from './CustomCard.module.css';
import Tooltip from '@mui/material/Tooltip';

const CustomCard = ({ data, type }) => {
    const getCard = (type) => {
        switch (type) {
            case 'album': {
                const { image, follows, title, songs } = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top">
                        <div className={styles.albumCard}>
                            <div className={styles.albumCard}>
                                <img
                                    className={styles.genreImage}
                                    src={image}
                                    alt={title}
                                />
                                <div className={styles.followerContainer}>
                                    <button className={styles.btn}>
                                        {follows} follows
                                    </button>
                                </div>
                            </div>
                            <p className={styles.cardTitle}>{title}</p>
                        </div>
                    </Tooltip>
                );
            }
            case 'songs': {
                const { image, likes, title } = data;
                return (
                    <div className={styles.albumCard}>
                        <div className={styles.albumCard}>
                            <img
                                className={styles.genreImage}
                                src={image}
                                alt={title}
                            />
                            <div className={styles.followerContainer}>
                                <button className={styles.btn}>
                                    {likes} Likes
                                </button>
                            </div>
                        </div>
                        <p className={styles.cardTitle}>{title}</p>
                    </div>
                );
            }
            default:
                return <></>;
        }
    };
    return getCard(type);
};

export default CustomCard;
