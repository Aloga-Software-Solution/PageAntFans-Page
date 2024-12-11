import './Opening.css';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import backgroundHomePage from '../../assets/Videos/HomePage.mp4';
import backgroundHomePageMovil from '../../assets/Videos/openingMobile.mp4';
import OpeningHero from '../../assets/Videos/Crystal-sparks-wallpaper.webm';
import OpeningModel1 from '../../assets/Videos/models.webm';
import OpeningModel2 from '../../assets/Videos/models1.webm';
import OpeningModel3 from '../../assets/Videos/models3.webm';
import OpeningModel4 from '../../assets/Videos/models4.webm';
import OpeningModel5 from '../../assets/Videos/Multimedia5.webm';
import OpeningMovilBackground from '../../assets/Images/Fondo_de_video.png';
import OpeningMovilVideo from '../../assets/Videos/movil-queens-unscreen.gif';
import OpeningImg from '../../assets/Images/HomeQueensDES.webp';

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
      <video autoPlay loop muted playsInline preload="auto" src={isMobile ? backgroundHomePageMovil : backgroundHomePage} className="partners__background-video"></video>
      <div className="opening--main__content">
          {isMobile && (
            <>
              <p className='opening--main__content--paragraph'
              >
                #1 Creator Community for Beauty Queens in the World.
              </p>
            {paragraphs.map((_, index) => (
              <p
                key={index}
                className={`opening--main__content--paragraph ${isRemoving ? 'removing' : ''}`}
              >
                {text}
              </p>
            ))}
            </>
          )}
        </div>
      </nav>

      <div className='opening--separator'></div>
        
        <div className='opening--hero'>
          <ReactPlayer className='opening--hero__video' playing={true} loop={true} muted preload='auto' url={OpeningHero} height={0}></ReactPlayer>

            <div className='opening--hero__top--text'>
                <h2 className='opening--hero__top--text--h2'>Turn fans into super fans, friends and pageant family</h2>
            </div>

            <div>
              <div className='opening--carousel'>
                <div className='opening--carousel__inner' id='carouselInner'>
                  {Array(3).fill(videoData).flat().map((video, index) => (
                    <div key={index} className={`opening--carousel__video--item ${video.className}`}>
                        <ReactPlayer playing={true} loop={true} muted preload='auto' url={video.url} style={{ objectFit: 'cover' }} width='100%' height='100%' />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='opening--text'>
              <h3>PageantFans is the perfect space to cultivate a close community with your most enthusiastic
                  followers, share exclusive content, and turn your passion into a thriving creative business. Join us
                  and bring your dreams to life!</h3>
            </div>

            <div className='opening--cards--Data'>
              <div className='opening--cards__text--cards'>
                  <h2 className='opening--cards__text--h2'>Build a community of supporters all one place</h2>
              </div>
              <div className='opening--cards__video--container'>
                <img className='opening--cards__video--container--img' src={OpeningMovilBackground} alt='' />
                  <div className='opening--cards__video--queens'>
                    <img className='opening--cards__img' src={OpeningMovilVideo} alt='' />
                  </div>
              </div>
            </div>

            <div className='opening--cards--Data'>
              <div className='opening--cards--Data__content'>
                <img className='opening--cards--Data__content--img' src={OpeningImg} alt='' />
              </div>
              <div className='opening--cards__text--cards'>
                <h2 className='opening--cards__text--h2'>Give sneak peeks and previews you would never share publicly</h2>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Opening;
