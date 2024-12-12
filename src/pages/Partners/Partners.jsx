import ReactPlayer from 'react-player';
import './Partners.css';
import { Link } from 'react-router-dom'
import backgroundPartners from '../../assets/Videos/Partners.webm';
import videoCrystalSparks from '../../assets/Videos/Crystal-sparks-wallpaper.webm';
import imgPartners from '../../assets/Images/imagen-partners.webp';
import imgLaptopPartners from '../../assets/Images/laptop.webp';

function Partners() {
    return (
        <section className="partners">
            <div className="partners__header">
                <ReactPlayer playing={true} loop={true} muted playsinline preload='auto' url={backgroundPartners} height={800} width={'100%'} className='partners__background-video'></ReactPlayer>
                <div className="partners--gradient"></div>
                <div className="partners__container-text">
                    <h1 className="container-text--title">PARTNERS</h1>
                    <p className="container-text--paragraph">Pageant systems, designers, photographers, glam teams, coaches, trainers subscribe to PageantFans to create opportunity for or to connect with beauty queens and titleholders around the world.</p>
                </div>
            </div>

            <div className="partners__separator"></div>

            <div className="partners__body">
                <ReactPlayer className="partners__body__video" playsinline playing={true} loop={true} muted preload='auto' url={videoCrystalSparks} height={0} ></ReactPlayer>
                <div className="partner__rows">
                    <div className="partner__row">
                        <div className="row__container-image">
                            <img className="container-image__image" src={imgPartners} alt="Partners Image" />
                        </div>
                        <div className="row_container-text">
                            <h2 className="container-text__cards-title">Pageant Systems</h2>
                            <p className="container-text__cards-text">PageantFans is fast becoming a powerful revenue generator for pageant systems of all sizes, everywhere. Find out what your potential earnings are and start working with us today!</p>
                            <div className="container-text__container-button">
                                <Link to='/joinus'>
                                    <button className="button__global--red">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="partner__row">
                        <div className="row_container-text">
                            <h2 className="container-text__cards-title">Investors</h2>
                            <p className="container-text__cards-text">
                                Founder-funded PageantFans is set to scale significantly, and is only
                                now allowing accredited investors the opportunity to participate. If
                                you're interested in investing in unicorns, let's talk.
                            </p>
                            <div className="container-text__container-button">
                                <Link to='/joinus'>
                                    <button className="button__global--red">Inquire</button>
                                </Link>
                            </div>
                        </div>
                        <div className="row__container-image">
                            <img className="container-image__image" src={imgLaptopPartners} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;