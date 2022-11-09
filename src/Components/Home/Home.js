import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import useTitle from '../TitleHooks/useTitle';
import About from './About/About';
import Practice from './Practice/Practice';


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Practice></Practice>
            
        </div>
    );
};

export default Home;