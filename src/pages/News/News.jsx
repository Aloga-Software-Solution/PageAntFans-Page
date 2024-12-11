import './News.css';
import backgroundStarts from '../../assets/Videos/backgroundStar.webm';
import videoPrimaryNews from '../../assets/Videos/news.webm';
import imgMagazine from '../../assets/Images/thom-brodeurs.jpg';
import imgMagazineAgain from '../../assets/Images/thomLondon.webp';
import imgMagazineThree from '../../assets/Images/Portada3_11zon.webp';
import imgMiniMagazineOne from '../../assets/Images/Portada1.png';
import imgMiniMagazineTwo from '../../assets/Images/Portada2.webp';
import imgMiniMagazineThree from '../../assets/Images/Portada4_11zon.webp';


function News() {
  return (
    <>
      <section className="news">
        <div className="news--header">
          <video autoPlay loop muted playsInline preload="auto" src={videoPrimaryNews} className="news--header__video"></video>
          <div className="news--overlay">
            <div className="news--overlay__content">
              <h1 className="news--overlay__content--title">NEWS</h1>
            </div>
          </div>
        </div>
        <div className="news--separator"></div>
        <div className="news--content">
          <video autoPlay loop muted playsInline preload="auto" src={backgroundStarts} className="news--content__video"></video>
          <div className="news--sections">
            <div className="news--sections__main">
              <img className="news--sections__main--img" src={imgMagazine} />
              <h2 className="news--sections__main--title">
                Beauty Mavens to Beauty Moguls: Can Thom Brodeur’s Vision Reshape
                Pageantry Into A Creator Economy Powered By The Queens Themselves?
              </h2>
              <p className="news--sections__main--text">
                Thom Brodeur is revolutionizing pageantry by empowering women through
                entrepreneurship, innovative platforms like PageantFans™, and modern
                media networks, fostering lasting opportunities and redefining success
                beyond the crown.
                <a
                  href="https://entrepreneurdailymag.com/beauty-mavens-to-beauty-moguls-can-thom-brodeurs-vision-reshape-pageantry-into-a-creator-economy-powered-by-the-queens-themselves"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="news__button">Read More</button>
                </a>
              </p>
              <div className="news--article">
                <p className="news--article__text">
                  Thom Brodeur, a visionary entrepreneur and founder of Brodeur Beauty
                  and PageantFans™, is taking on the challenge of transforming the
                  global beauty pageant industry—a space historically centered on
                  women but often controlled by men. With a career spanning leadership
                  roles at tech and media giants like GoDaddy, Marketwired, and
                  Yandy.com, Brodeur has brought his unique business insights to
                  industries ranging from B2B to consumer-facing sectors. Today, he’s
                  channeling that experience into a bold initiative: reshaping the
                  pageant world to empower the women who fuel it.
                  <a
                    href="https://forbeslondon.com/thom-brodeur-aims-to-revolutionize-the-pageant-industry-empowering-women-beyond-the-crown/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="news__button">Read More</button>
                  </a>
                </p>
                <img src={imgMagazineAgain} className="news--article__img" />
              </div>
              <div className="news--article">
                <p className="news--article__text">
                  Thom Brodeur: Brand Builder. Market Disruptor. Mr. Congeniality.
                  Brodeur’s final word to our editor was “there is an old saying:
                  ‘behind every great man, there has to be a great woman.’ Personally?
                  I’d like to flip that on its head. I want to be the great man,
                  behind every great woman who chooses to participate in this
                  industry. Going back to basics, remembering what and most
                  importantly ‘who’ is the center of these industries, and innovating
                  and challenging the status quo is how we’ll get there. Watch this
                  space for big things. They’re coming.”
                  <a
                    href="https://celebritylosangeles.com/fashion/thom-brodeur-visionary-ceo-and-champion-of-women-in-the-beauty-industry/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="news__button">Read More</button>
                  </a>
                </p>
                <img src={imgMagazineThree} className="news--article__img" />
              </div>
            </div>
            <div className="news--related">
              <div className="news--related__content">
                <img src={imgMiniMagazineOne} className="news--related__content--img" alt="Thom Brodeur" />
                <p className="news--related__content--text">
                  Thom Brodeur: Brand Builder. Market Disruptor. Mr. Congeniality. How
                  a smalltown boy plans to change a global industry built for women
                  <a
                    href="https://fortunefeature.com/thom-brodeur-brand-builder-market-disruptor-mr-congeniality/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="news__button">Read More</button>
                  </a>
                </p>
              </div>

              <div className="news--related__content">
                <img src={imgMiniMagazineTwo} className="news--related__content--img" alt="Thom Brodeur" />
                <p className="news--related__content--text">
                  Thom Brodeur: Visionary CEO, Beauty Mogul, and Advocate for Women in
                  Technology. In the dynamic intersection of beauty, technology, and
                  business, few names resonate as powerfully as Thom Brodeur. An
                  American businessman, brand builder, and philanthropist, Brodeur’s
                  career is a testament to visionary leadership, relentless
                  innovation, and unwavering advocacy for women in industries often
                  dominated by male perspectives.
                  <a
                    href="https://thehollywoodmagazine.com/hollywood/thom-brodeur-visionary-ceo-beauty-mogul-and-advocate-for-women-in-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="news__button">Read More</button>
                  </a>
                </p>
              </div>

              <div className="news--related__content">
                <img src={imgMiniMagazineThree} className="news--related__content--img" alt="Thom Brodeur" />
                <p className="news--related__content--text">
                  Thom Brodeur: A Visionary Leader in the Beauty IndustryPioneering
                  Innovation and Empowerment in the World of Beauty and Beyond.
                  Brodeur has carved a niche for himself by not only revolutionizing
                  beauty brands but also empowering individuals to achieve their full
                  potential. His journey, marked by visionary initiatives and a
                  commitment to excellence, has made a significant impact on the
                  global beauty landscape.
                  <a
                    href="https://ceolosangeles.com/ceo/thom-brodeur-a-visionary-leader-in-the-beauty-industry/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="news__button">Read More</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
