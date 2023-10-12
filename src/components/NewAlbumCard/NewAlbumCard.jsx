import React, { useEffect, useState } from 'react'
import style from './NewAlbumCard.module.css'

const NewAlbumCard = () => {
    const [topAlbum, setTopAlbum] = useState([])

    const getTopAlbums = async () => {
        try {
            const topAlbumResponse = await fetch(
                'https://qtify-backend-labs.crio.do/albums/new'
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
                        <p className={style.cardTitle}>New Bollywood</p>
                    </div>
                )
            })}
        </>
    )
}

export default NewAlbumCard
