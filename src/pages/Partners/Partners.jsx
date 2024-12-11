import './Partners.css';

import backgroundPartners from '../../assets/Videos/Partners.webm';
import VideoCrystalSparks from '../../assets/Videos/Crystal-sparks-wallpaper.webm';
import imgPartners from '../../assets/Images/imagen-partners.webp';
import imgLaptopPartners from '../../assets/Images/laptop.webp';

function Partners() {

    return (
        <section className="partners">
            <nav className="partners__header-footer">
                <video autoPlay loop muted playsInline preload="auto" src={backgroundPartners} className="partners__background-video"></video>
                <div className="partners__overlay-banner">
                    <div className="partners__header-content">
                        <h1 className="partners__title">PARTNERS</h1>
                        <div className="partners__overlay-content">
                            <p className="partners__p-initial">
                                Pageant systems, designers, photographers, glam teams, coaches,
                                trainers subscribe to PageantFans to create opportunity for or to
                                connect with beauty queens and titleholders around the world.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="next-button-lefth">
                    <box-icon name='chevron-left' type='solid' color='#ffffff'></box-icon>
                </button>
            </nav>
            <div className="partners__separator"></div>
            <div className="partners__hero">
                <video autoPlay loop muted playsInline preload="auto" src={VideoCrystalSparks}></video>
                <div className="partners__cards">
                    <img className="partners__image-first" src={imgPartners} alt="Partners Image" />
                    <div>
                        <h2 className="partners__cards-title">Pageant Systems</h2>
                        <p className="partners__cards-text">
                            PageantFans is fast becoming a powerful revenue generator for pageant
                            systems of all sizes, everywhere. Find out what your potential earnings
                            are and start working with us today!
                        </p>
                        <br />
                        <div className="partners__button-system">
                            <button className="button-1">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="partners__cards">
                    <div className="partners__text-cards-partners">
                        <h2 className="partners__cards-title">Investors</h2>
                        <p className="partners__cards-text">
                            Founder-funded PageantFans is set to scale significantly, and is only
                            now allowing accredited investors the opportunity to participate. If
                            you're interested in investing in unicorns, let's talk.
                        </p>
                        <br />
                        <div className="partners__button-system">
                            <button className="button-1">Inquire</button>
                        </div>
                    </div><br />
                    <div className="partners__content-image">
                        <img className="partners__image-second" src={imgLaptopPartners} alt="Laptop Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;