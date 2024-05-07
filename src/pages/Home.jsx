import React from 'react';
import Header from '../components/Header/Header';
import MainSection from '../components/MainSection/MainSection';
import PremiumSection from '../components/PremiumSection/PremiumSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <MainSection/>
            <PremiumSection/>
            <Footer/>
        </div>
    );
}

export default Home;
