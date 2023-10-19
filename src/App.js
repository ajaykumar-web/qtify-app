import { React, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import SongsTabs from './components/SongsTabs/SongsTabs';
import FAQs from './components/FAQs/FAQs';
import PlaySong from './components/PlaySong/PlaySong';
import { fetchTopAlbum } from './api/api';
import { fetchSongs } from './api/api';

function App() {
    const [topAlbum, setTopAlbum] = useState([]);
    const [songs, setSongs] = useState([]);

    const getTopAlbums = async () => {
        try {
            const topAlbumData = await fetchTopAlbum();
            setTopAlbum(topAlbumData.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getSongs = async () => {
        try {
            const songsData = await fetchSongs();
            setSongs(songsData.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getTopAlbums();
        getSongs();
    }, []);
    return (
        <>
            <Navbar />
            <HeroSection />
            <CarouselSection data={topAlbum} type="album" title="Top Albums" />
            <CarouselSection data={topAlbum} type="album" title="New Albums" />
            <SongsTabs data={songs} type="songs" title="Songs" />
            <FAQs />
        </>
    );
}

export default App;
