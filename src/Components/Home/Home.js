import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import About from './About/About';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            
        </div>
    );
};

export default Home;