import React from 'react';
import HomeController from '../Screen/Home/HomeController';
import { Routes, Route } from 'react-router-dom';

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeController/>} />
            
        </Routes>
    )
}

export default routes;