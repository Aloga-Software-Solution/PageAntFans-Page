import './CarruselPages.css';
import Carousel from '../../components/Carousel';
import Queens from '../Queens/Queens';
import Fans from '../Fans/Fans';
import Home from '../Home/Home';
import Partners from '../Partners/Partners';

// Define las páginas del carrusel
const pages = [<Home />, <Queens />, <Fans />, <Partners />];

const CarruselPages = () => {
    return (
        <div className="content">
            <Carousel pages={pages} />
        </div>
    );
};

export default CarruselPages;