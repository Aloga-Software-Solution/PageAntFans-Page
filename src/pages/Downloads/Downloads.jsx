import './Downloads.css'
import ReactPlayer from 'react-player';
import backgroundStarts from '../../assets/Videos/backgroundStar.webm';
import imgMockupIphone from '../../assets/Images/movil.webp';
import codeQrImg from '../../assets/Images/codigoQR.webp';
import { Link } from 'react-router-dom'

function Download() {
    return (
        <section className='download'>
            <ReactPlayer playing={true} loop={true} playsinline muted preload='auto' url={backgroundStarts} className="download__video"></ReactPlayer>
            <div className='download__header'>
                <h1 className='download__header--title'>Download</h1>
            </div>
            <div className="download__section">
                <div className="download__content">
                    <div className="download__phone">
                        <img className="download__phone--img" src={imgMockupIphone} alt='' />
                    </div>
                    <div className="download__content__text">
                        <div className="download__QR">
                            <img className="download__QR--img" src={codeQrImg} alt='' />
                        </div>
                        <div className="download__content__QR">
                            <p className="download__content__QR--text"> The only fan app that gives you exclusive, VIP-level access to special
                                content and communication with your favorite pageant contestants, titleholders and beauty
                                queens from anywhere in the world. On PageantFans, you're not just a follower, you're family.
                            </p>
                        </div>
                        <div className="download__button">
                            <Link to='/download/downloadapp'><button className="download__button--button">Download</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;