import './downloadapp.css';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import downloadHeroVideo from '../../assets/Videos/DOWNLOADAPP Page_HeroVideo.webm';
import videoIphoneFrame from '../../assets/Videos/MovilAppVideo.webm';
import videoStremGirl from '../../assets/Videos/StreamGilr.webm';
import imgStoriesPage from '../../assets/Images/StoriesPage.webp';
import imgPcMovilPhone from '../../assets/Images/pc-movilPhone.webp';
import codeQrImg from '../../assets/Images/codigoQR.webp';

function DownloadApp() {

  //Body modifier in this section

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <section className='download--app'>
      <video src={downloadHeroVideo} autoPlay loop muted playsInline width="100%" height="auto" className="download--app__video" />
      <div className="download--app__content">
        <h2 className="download--app__content--title">
          DOWNLOAD THE APP
        </h2>
        <div className="download--app__content--grid">
          <div className="download--app__content--content">
            <h3 className="download--app__content--subtitle">
              Coming Soon!
            </h3>
            <p className="download--app__content--description">
              The only fan app that gives you exclusive and personal access to your favorite pageant contestants, beauty queens and titleholders from anywhere.
            </p>
          </div>
          <div className="download--app__content--phone">
            <video src={videoIphoneFrame} autoPlay loop muted playsInline preload="auto" className="download--app__content--phone--video"></video>
          </div>
        </div>
        <div className="download--app__diagonal">
          <div className="download--app__video__two">
            <video className="download--app__video__two--video" autoPlay loop muted playsInline preload="auto" src={videoStremGirl}></video>
          </div>
          <div className="download--app__text">
            <h2 className="download--app__text--title">Enjoy live moments with the queens that inspire you most</h2>
            <p className="download--app__text--description">
              Special invitation-only experiences for you and the pageant ladies you love are available exclusively on PageantFans.
            </p>
          </div>
        </div>
        <div className="download--app__stories">
          <div className="download--app__stories__content">
            <h2 className="download--app__stories__content--title">
              Make memories with your favorite queens
            </h2>
            <p className="download--app__stories__content--description">
              Whether she's giving you an insider's circle look at her pageant wardrobe, sharing her secret beauty tips with you, or sending you or a loved one a happy birthday or holiday wish; you will cherish these moments with the beauties you admire most on PageantFans.
            </p>
          </div>
          <img src={imgStoriesPage} alt="" className="download--app__stories-image" />
        </div>
      </div>
      <div className="download--app__exclusive">
        <img className="download--app__exclusive--image" src={imgPcMovilPhone} />
        <h3 className="download--app__exclusive--description">
          Exclusive content, community and commerce with your favorite queens from anywhere. Only on PageantFans.
        </h3>
      </div>
      <div className="download--app__features">
        <div className="download--app__card">
          <box-icon name="apple" type='logo' color="#000  " style={{ width: "105px", height: "105px" }} className='bx bxl-apple download--app__card--icon' ></box-icon>
          <h3 className='download--app__card--tittle'>IOS</h3>
          <button className="button-1">Download</button>
        </div>
        <div className="download--app__card">
          <box-icon name="android" type='logo' color="#000  " style={{ width: "105px", height: "105px" }} className='bx bxl-android download--app__card--icon'></box-icon>
          <h3 className='download--app__card--tittle'>Android</h3>
          <button className="button-1">Download</button>
        </div>
        <div className="download--app__card">
          <img src={codeQrImg} alt="" className='download--app__card--QR' />
          <h3 className='download--app__card--tittle'>QR</h3>
          <h4 className='download--app__card--subtitle'>Scan and join PageantFans</h4>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
