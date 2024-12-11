import './Opening.css';
import React, { useState, useEffect } from 'react';
import backgroundHomePage from '../../assets/Videos/HomePage.mp4';
import backgroundHomePageMovil from '../../assets/Videos/openingMobile.mp4';
import OpeningModel1 from '../../assets/Videos/models.webm';
import OpeningModel2 from '../../assets/Videos/models1.webm';
import OpeningModel3 from '../../assets/Videos/models3.webm';
import OpeningModel4 from '../../assets/Videos/models4.webm';
import OpeningModel5 from '../../assets/Videos/Multimedia5.webm';

// ---- IMPORTS RESOURCES ---- //
import Video1 from '../../assets/Videos/opening_video.webm';
import Video2 from '../../assets/Videos/opening_video2.webm';

import Image1 from '../../assets/Images/homepage_photo1.webp';
import Image2 from '../../assets/Images/homepage_photo2.webp';
import Image4 from '../../assets/Images/homepage_photo4.webp';
import Image5 from '../../assets/Images/homepage_photo5.webp';

import backgroundStarts from '../../assets/Videos/backgroundStar.webm';

const videoData = [
  { url: OpeningModel4, className: 'me1' },
  { url: OpeningModel5, className: 'me2' },
  { url: OpeningModel3, className: 'me3' },
  { url: OpeningModel1, className: 'me4' },
  { url: OpeningModel2, className: 'me5' },
];

function Opening() {

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
        <div className="cards__container-cards">
          <h1 className="container-cards__row__text container-cards__row--letter-top">Pageantfans</h1>
          <div className="container-cards__row container-cards__row--images">
            <div className="row__container-resource">
              <img className="container-resource__image" src={Image2}/>
            </div>
            <div className="row__container-resource">
              <video autoPlay loop muted playsInline preload="auto" className="container-resource__video" src={Video2}></video>
            </div>
            <div className="row__container-resource">
              <img className="container-resource__image" src={Image1}/>
            </div>
          </div>
          <h1 className="container-cards__row__text container-cards__row--letter-middle">Pageantfans</h1>
          <div className="container-cards__row container-cards__row--images">
            <div className="row__container-resource">
              <img className="container-resource__image" src={Image4}/>
            </div>
            <div className="row__container-resource">
              <video autoPlay loop muted playsInline preload="auto" className="container-resource__video" src={Video1}></video>
            </div>
            <div className="row__container-resource">
              <img className="container-resource__image" src={Image5}/>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Opening;
