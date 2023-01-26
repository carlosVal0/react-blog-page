import React from 'react';
import Header from '../components/Header';
import "../components/Header"
import SocialMediaPop from '../components/SocialMediaPop';
import landing_background from "../assets/big_image/background_landing.jpg"
import "../styles/Layout.css"

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="main-container">
                    <div className="rigth-container">
                        <div className="phrase">
                            <p>El corazón necesita ausencias para alimentar el deseo</p>
                            <cite> Gonzalo Arango</cite>
                        </div>
                        <SocialMediaPop className="social-media"/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Layout;