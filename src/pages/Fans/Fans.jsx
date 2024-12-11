import './Fans.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imgFansCollage from '../../assets/Images/IMG-FANS-COLLAGE.webp';
import imgFansPhone from '../../assets/Images/FansPhone.webp';
import imgModelsFans from '../../assets/Images/modelsFans.webp';
import videoFansHome from '../../assets/Videos/fansHome.webm';
import videoCrystalSparks from '../../assets/Videos/Crystal-sparks-wallpaper.webm';

function Fans() {

    return (
        <section className="fans">
            <video autoPlay loop muted playsInline preload="auto" src={videoFansHome} className="fans__video"></video>
            <div className="fans--section">
                <div className="fans--section__header">
                    <h1 className="fans--section__header--tittle">FANS</h1>
                    <p className="fans--section__header--content">
                        Get exclusive content from the beauty queens you love the most. Join the elite
                        inner circle of your favorite titleholders and gain elevated access not available elsewhere.
                    </p>
                    <Link to="/subscribers">
                        <button className="fans--section__button">Subscribe</button>
                    </Link>
                </div>
            </div>
            <div className="fans--separator"></div>
            <div className="fans--content">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    src={videoCrystalSparks}
                    className="fans--content__video">
                </video>
                <div className="fans--content__cards">
                    <img src={imgFansCollage} alt="Fans collage"/>
                    <div className="fans--content__cards--text">
                    <h2 className="fans--content__cards--text--tittle">Get sneak peeks before anyone else</h2>
                        <p className="fans--content__cards--text--content">Help your favorites choose their head shots, pageant wardrobe and more. All private. All behind the scenes. All access just for you.</p>
                    </div>
                </div>
                <div className="fans--content__cards">
                    <div className="fans--content__cards--text--two">
                        <h2 className="fans--content__cards--text--two--tittle">Have live chats and private discussions with your favorite queens</h2>
                    </div>
                    <img src={imgFansPhone} alt="Phone with fans" />
                </div>
                <div className="fans--content__cards">
                    <div className="fans--content__community">
                        <h3 className="fans--content__community--tittle">COMMUNITY</h3>
                        <h2 className="fans--content__community--sub-tittle">Make memories with your favorite queens. And share their journey to the crown, together.</h2>
                        <p className="fans--content__community--content">Exclusive content, community and commerce with your favorite queens from around the world. Right here. Right now!</p>
                        <img src={imgModelsFans} alt="Models fans" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fans;
