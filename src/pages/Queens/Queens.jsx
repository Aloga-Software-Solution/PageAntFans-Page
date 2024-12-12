import React from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import './Queens.css';
import QueensBanner from '../../assets/Videos/queens.webm';
import QueensHero from '../../assets/Videos/Crystal-sparks-wallpaper.webm';
import QueensImg from '../../assets/Images/HomeQueensDES.webp';
import QueensModel1 from '../../assets/Videos/models.webm';
import QueensModel2 from '../../assets/Videos/models1.webm';
import QueensModel3 from '../../assets/Videos/models3.webm';
import QueensModel4 from '../../assets/Videos/models4.webm';
import QueensModel5 from '../../assets/Videos/Multimedia5.webm';
import QueensMovilBackground from '../../assets/Images/Fondo_de_video.png';
import QueensMovilVideo from '../../assets/Videos/queens_movil_app.webm';

const videoData = [
    { url: QueensModel4, className: 'me1' },
    { url: QueensModel5, className: 'me2' },
    { url: QueensModel3, className: 'me3' },
    { url: QueensModel1, className: 'me4' },
    { url: QueensModel2, className: 'me5' },
];

function Queens() {
    return (
        <section className='queens'>
            <div className='queens--banner'>
                <ReactPlayer playing={true} loop={true} muted playsinline preload='auto' url={QueensBanner} height={800} width={'100%'} className='queens--banner__video'></ReactPlayer>
                <div className='queens--banner__content'>
                    <div className='queens--banner__header'>
                        <h1 className='queens--banner__header--title'>QUEENS</h1>
                        <div className='queens--banner__description'>
                            <p className='queens--banner__description--text'>
                                Share exclusive content with your fans. Invite them to support your pageant journey with likes, shares and donations.
                            </p>
                        </div>
                        <div className='queens--banner__actions'>
                            <Link to='/joinus'><button className='queens--banner__actions--button'>Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='queens--separator'></div>
            <div className='queens--hero'>
                <ReactPlayer className='queens--hero__video' playing={true} loop={true} muted preload='auto' url={QueensHero} height={0}></ReactPlayer>
                <div className='queens--hero__top'>
                    <h2 className='queens--hero__top--title'>Turn fans into super fans, friends and pageant family</h2>
                </div>
                <div className='queens--carousel'>
                    <div className='queens--carousel__inner' id='carouselInner'>
                        {Array(3).fill(videoData).flat().map((video, index) => (
                            <div key={index} className={`queens--carousel__video--item ${video.className}`}>
                                <ReactPlayer playing={true} loop={true} muted preload='auto' url={video.url} style={{ objectFit: 'cover' }} width='100%' height='100%' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='queens--text'>
                    <h3 className='queens--text__content'>PageantFans is the perfect space to cultivate a close community with your most enthusiastic
                        followers, share exclusive content, and turn your passion into a thriving creative business. Join us
                        and bring your dreams to life!</h3>
                </div>
                <div className='queens--cards'>
                    <div className='queens--cards__text'>
                        <h2 className='queens--cards__text--subtitle'>Build a community of supporters all one place</h2>
                    </div>
                    <div className='queens--cards__container__video'>
                        <img className='queens--cards__container__video--img' src={QueensMovilBackground} alt='' />
                        <div className='queens--cards__queens'>
                            <ReactPlayer className='queens--cards__queens--video' playing={true} loop={true} muted preload='auto' url={QueensMovilVideo}></ReactPlayer>
                        </div>
                    </div>
                </div>
                <div className='queens--cards'>
                    <div className='queens--cards__container'>
                        <img className='queens--cards__container--img' src={QueensImg} alt='' />
                    </div>
                    <div className='queens--cards__texts'>
                        <h2 className='queens--cards__text--subtitle'>Give sneak peeks and previews you would never share publicly</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Queens;
