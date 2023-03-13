import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pie1 from '../assets/pictures/pie1.png';
import Pie2 from '../assets/pictures/pie2.png';
import Cookies1 from '../assets/pictures/cookies1.png';
import Cookies2 from '../assets/pictures/cookies2.png';
import Cake1 from '../assets/pictures/cake1.png';
import Cake2 from '../assets/pictures/cake2.png';

const Home = () => {
    return (
        <div className="page-content">
            <h1>→ Home</h1>
            <Carousel>
                <div>
                    <img src={Pie1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Cake2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Cookies2} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Home;
