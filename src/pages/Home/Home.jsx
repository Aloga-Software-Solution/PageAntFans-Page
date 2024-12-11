import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel';
import Queens from '../Queens/Queens';
import Fans from '../Fans/Fans';
import Opening from '../Opening/Opening';
import Partners from '../Partners/Partners';

const pages = [<Opening />,<Queens />,<Fans />, <Partners />];

function Home() {

  return (
    <div className='content'>
       <Carousel pages={pages} />
    </div>
  );
}

export default Home;
