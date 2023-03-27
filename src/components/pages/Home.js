import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pie1 from '../../assets/pictures/pie1.png';
import Pie2 from '../../assets/pictures/pie2.png';
import Cookies1 from '../../assets/pictures/cookies1.png';
import Cookies2 from '../../assets/pictures/cookies2.png';
import Cake1 from '../../assets/pictures/cake1.png';
import Cake2 from '../../assets/pictures/cake2.png';
import TopLeft from '../../assets/pictures/nav-bg-1.png';

const Home = () => {
    return (
        <div>
            <div className="top-left-home">
                <img src={TopLeft} alt="Pies on a table" />
            </div>
            <div className="carousel-contain">
                <Carousel className="carousel" autoPlay="true" showThumbs="false">
                    <div>
                        <img src={Pie1} alt="Lemon Meringue Pie" />
                        <p className="legend">"This lemon meringue pie made me say "YUM!!!!!!!~!!!"</p>
                    </div>
                    <div>
                        <img src={Cake2} alt="Cake" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={Cookies2} alt="Cookies" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={Cake1} alt="Cake" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={Cookies1} alt="Cookies" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={Pie2} alt="Pie" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
