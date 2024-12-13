import './Home.css';
import React, { useState, useEffect } from 'react';
import backgroundHomePage from '../../assets/Videos/HomePage.mp4';
import backgroundHomePageMovil from '../../assets/Videos/openingMobile.mp4';
import ReactPlayer from 'react-player';

// ---- IMPORTS RESOURCES ---- //
import Video1 from '../../assets/Videos/opening_video.webm';
import Video2 from '../../assets/Videos/opening_video2.webm';

import Image1 from '../../assets/Images/homepage_photo1.webp';
import Image2 from '../../assets/Images/homepage_photo2.webp';
import Image3 from '../../assets/Images/homepage_photo4.webp';
import Image4 from '../../assets/Images/homepage_photo5.webp';

import backgroundStarts from '../../assets/Videos/backgroundStar.webm';

function Home() {

  const [isMobile, setIsMobile] = useState(false)
  const [text, setText] = useState("");
  const [isRemoving, setIsRemoving] = useState(false);
  const paragraphs = [
    "Own, and earn from your name, image, and likeness™."
  ];

  useEffect(() => {
    const textEffect = async () => {
      while (true) {
        for (const paragraph of paragraphs) {
          for (let i = 0; i < paragraph.length; i++) {
            setText((prev) => prev + paragraph[i]);
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          await new Promise(resolve => setTimeout(resolve, 1500));
          setIsRemoving(true);
          for (let i = paragraph.length - 1; i >= 0; i--) {
            setText((prev) => prev.slice(0, i));
            await new Promise(resolve => setTimeout(resolve, 50));
          }
          setIsRemoving(false);
        }
      }
    };
    textEffect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <nav className='opening--main'>
        <div className="opening__container-video">
          <video autoPlay loop muted playsInline preload="auto" src={isMobile ? backgroundHomePageMovil : backgroundHomePage} className="opening__background-video"></video>
          <div className="opening--main__content">
            {isMobile && (
              <>
                <p className='opening--main__content--paragraph'>
                  #1 Creator Community for Beauty Queens in the World.
                </p>
                <p className="opening--main__content--paragraph">Own, and earn from your name, image, and likeness™.</p>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className='opening--separator'></div>
      <section className="cards">
        <video autoPlay loop muted playsInline preload="auto" src={backgroundStarts} className="cards__video"></video>
        <div className='cards--grid'>
          <div className="cards--grid__content--img1">
            <img className="cards--collage--img" src={Image2} alt="" />
          </div>
          <div className="cards--grid__content--video1">
            <ReactPlayer playing={true} loop={true} playsinline muted preload='auto' url={Video2} height={'auto'} width={'100%'} className="cards--collage--img"></ReactPlayer>
          </div>
          <div className="cards--grid__content--img2">
            <img className="cards--collage--img" src={Image1} alt="" />
          </div>
          <div className="cards--grid__content--text">
            <h3 className='cards--text'>PageantFans creators give their fans access to red carpet events, VIP experiences, and exclusive brand partnership journeys they can't experience anywhere else!</h3>
          </div>
          <div className="cards--grid__content--img3">
            <img className="cards--collage--img" src={Image3} alt="" />
          </div>
          <div className="cards--grid__content--video2">
            <ReactPlayer playing={true} loop={true} playsinline muted preload='auto' url={Video1} height={'auto'} width={'100%'} className="cards--collage--img"></ReactPlayer>
          </div>
          <div className="cards--grid__content--img4">
            <img className="cards--collage--img" src={Image4} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
