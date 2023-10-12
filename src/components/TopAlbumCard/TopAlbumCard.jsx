import React, { useEffect, useState } from 'react'
import style from './TopAlbumCard.module.css'

const TopAlbumCard = () => {
    const [topAlbum, setTopAlbum] = useState([])

    const getTopAlbums = async () => {
        try {
            const topAlbumResponse = await fetch(
                'https://qtify-backend-labs.crio.do/albums/top'
            )
            if (topAlbumResponse.ok) {
                const topAlbumData = await topAlbumResponse.json()
                setTopAlbum(topAlbumData)
            } else {
                console.error('Failed to fetch top albums')
            }
        } catch (error) {
            console.error('Error fetching top albums:', error)
        }
    }

    useEffect(() => {
        getTopAlbums()
    }, [])
    return (
        <>
            {topAlbum.map((album) => {
                return (
                    <div key={album.id}>
                        <div className={style.albumCard}>
                            <img
                                className={style.genreImage}
                                src={album.image}
                                alt={album.title}
                            />
                            <div className={style.followerContainer}>
                                <button className={style.btn}>
                                    {album.follows}
                                </button>
                            </div>
                        </div>
                        <p className={style.cardTitle}>{album.title}</p>
                    </div>
                )
            })}
        </>
    )
}

export default TopAlbumCard
