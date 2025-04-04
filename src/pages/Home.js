import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import SearchBar from '../components/SearchBar/SearchBar';
import FavoriteLocations from '../components/FavoriteLocations/FavoriteLocations';
import DestinationCards from '../components/DestinationCards/DestinationCards';
import ZoneNavigation from '../components/ZoneNavigation/ZoneNavigation';
import Footer from '../components/Footer/Footer';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <NavBar />
            <div className="main-content">
                <SearchBar />
                <FavoriteLocations />
                <DestinationCards />
                <ZoneNavigation />
            </div>
        </div>
    );
};

export default Home;