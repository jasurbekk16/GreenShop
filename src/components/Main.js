import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HomeAllPlants from '../pages/HomeAllPlants';

const Main = () => {
    return (
        <div className='mainWrapper'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};


export default Main;