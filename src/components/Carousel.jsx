import { useNavigate, useLocation } from 'react-router-dom';

const Carousel = ({ pages }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Define los paths correspondientes al carrusel
    const paths = ['home', 'queens', 'fans', 'partners'];
    const currentIndex = paths.findIndex((path) => location.pathname.includes(path));

    const nextPage = () => {
        const nextIndex = (currentIndex + 1) % paths.length;
        navigate(`/${paths[nextIndex]}`);
    };

    const prevPage = () => {
        const prevIndex = (currentIndex - 1 + paths.length) % paths.length;
        navigate(`/${paths[prevIndex]}`);
    };

    return (
        <div className="carousel">
            <button onClick={prevPage} className="next-button-left">
                <box-icon name="chevron-left" type="solid" color="#ffffff"></box-icon>
            </button>
            <div className="carousel-content">{pages[currentIndex]}</div>
            <button onClick={nextPage} className="next-button-right">
                <box-icon name="chevron-right" type="solid" color="#ffffff"></box-icon>
            </button>
        </div>
    );
};

export default Carousel;
