import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import About from './About/About';
import NavBar from './NavBar/NavBar';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;