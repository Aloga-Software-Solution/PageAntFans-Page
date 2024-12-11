import './About.css';
import ReactPlayer from 'react-player';
import AboutBanner from '../../assets/Videos/MissDenmarkVictoria.webm';
import AboutHero from '../../assets/Videos/Crystal-sparks-wallpaper.webm';
import AboutCards from '../../assets/Videos/backgraund-about.webm';
import AboutThom from '../../assets/Images/thom-brodeur.webp';
import AboutLance from '../../assets/Images/lance-goodman.webp';
import AboutAward from '../../assets/Images/award-pageant.webp';


function About() {
  return (
      <section className="about">
        <div className="about__banner">
          <ReactPlayer className="banner__video" playing={true} url={AboutBanner} muted loop={true} height={800} width={"100%"} />
          <div className="banner__overlay">
            <div className="overlay__content">
              <h1 className='overlay__h1'>ABOUT US</h1>
            </div>
          </div>
        </div>
        <div className="about__separator"></div>
        <div className="about__hero">
          <ReactPlayer className="hero__video" playing={true} url={AboutHero} muted loop={true} height={0} />
          <div className="hero__information">
            <div className="information__description">
              <h2 className="description__title">Pageants</h2>
              <p className="description__text">PageantFans™ is the only creator and fan app addressing the unmet need of the 700 million+ pageant fans and nearly 10 million beauty pageant contestants and queens who compete in more than 350,000 pageants around the world every year.</p>
              <p className="description__text">Led by a team of technology and pageant industry innovators, PageantFans is the only app of its kind tailored to the global pageant ecosystem, combining content, community and commerce all under one digital roof. PageantFans is slated to achieve a $1B valuation in less than 6 years by disrupting the $32B worldwide pageant industry. Say hello to the next unicorn in tech entertainment.</p>
            </div>
            <h2 className='information__title'>Leadership</h2>
            <div className="information__ceos">
              <div className="ceos__content">
              <img src={AboutThom} className='content__image' />
                <ReactPlayer className="about__hero-video" playing={true} url={AboutCards} muted loop={true} height={0} />
                <div className="content__text">
                  <h2 className="content__name">Thom Brodeur</h2>
                  <h3 className="content__position">Founder & CEO</h3>
                  <p className="content__description">Featured in Fortune as a "beauty industry disruptor" and named by Pageantry Magazine as "one of the most fascinating leaders in the industry." declared "a brilliant strategist with a sharp eye and mind for positioning" by WWD, and recognized by Art & Beauty Magazine as "Man of the Year," Brodeur Beauty Founder and PageantFans™ CEO Thom Brodeur - a well-regarded and widely recognized tech and ecommerce executive known for his market-maker year-old beauty pageant Industry and people are watching. </p>
                </div>
              </div>
            </div>

            <div className="information__ceos">
              <div className="ceos__content">
                <ReactPlayer className="about__hero-video" playing={true} url={AboutCards} muted loop={true} height={0} />
                <div className="content__text">
                  <h2 className="content__name">Lance Goodman</h2>
                  <h3 className="content__position">Co-Founder</h3>
                  <p className="content__description">Lance Goodman is Co-Founder of PageantFans™ and is responsible for product development, operations and go to market strategy for the company. Goodman is also Co-Founder at SPINTEL, a CEO/Managing Partner at AmeriCoin Capital GP, LLC, and President at Premier Development Partners, and has vast experience in business intelligence, blockchain, digital assets, commercial development, payment processing, software development, and luxury experiences. Lance's educational background includes a degree in Entrepreneurship from Middle Tennessee State University and attendance at the University of Tennessee. </p>
                </div>
                <img src={AboutLance} className='content__image' />
              </div>
            </div>

            <h2 className="information__name">Industry recognition</h2>
            <div className="information__card">
              <div className="card__award">
                <img src={AboutAward} className='award__image' />
                <div className="award__text">
                  <h2 className="award__title">AWARD WINNING</h2>
                  <p className="award__description">PageantFans is an award-winning creator and fan app for beauty queens, pageant contestants and the global pageant audience and ecosystem. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;
