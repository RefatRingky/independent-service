import React from 'react';
import Services from '../Services/Services';
import Banner from  '../Banner/Banner'
import Menus from '../Menus/Menus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Menus></Menus>
        </div>
    );
};

export default Home;