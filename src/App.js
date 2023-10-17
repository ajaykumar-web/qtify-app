import { React, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import { fetchTopAlbum } from './api/api';

function App() {
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
            <Navbar />
            <HeroSection />
            <CarouselSection data={topAlbum} type="album" title="Top Albums" />
            <CarouselSection data={topAlbum} type="album" title="New Albums" />
        </>
    );
}

export default App;
