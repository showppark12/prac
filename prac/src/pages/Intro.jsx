import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroBody from '../components/IntroBody'
import '../style/Header.css'
const Intro = () => {
    return (
        <div className="wrap">
        <Header/>
        <IntroBody/>
        <Footer />
        </div>
    )
}

export default Intro;