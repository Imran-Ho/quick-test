import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer/Footer';
import Home from '../Components/Home/Home';
import NavBar from '../Components/Home/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;