import React from 'react';
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';

const Card = ({ data, type }) => {
    const getCard = (type) => {
        switch (type) {
            case 'albums': {
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
            default:
                return <></>;
        }
    };
    return getCard(type);
};

export default Card;
