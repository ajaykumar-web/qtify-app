import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import TopAlbumCarousel from './components/TopAlbumCarousel/TopAlbumCarousel'
import NewAlbumCarousel from './components/NewAlbumCarousel/NewAlbumCarousel'

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TopAlbumCarousel />
            <NewAlbumCarousel />
        </>
    )
}

export default App
