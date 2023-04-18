import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Pie1 from '../../assets/pictures/pie1.png';
import Pie2 from '../../assets/pictures/pie2.png';
import Cookies1 from '../../assets/pictures/cookies1.png';
import Cookies2 from '../../assets/pictures/cookies2.png';
import Cookies3 from '../../assets/pictures/cookies3.png';
import Cake1 from '../../assets/pictures/cake1.png';
import Cake2 from '../../assets/pictures/cake2.png';
import HandPies1 from '../../assets/pictures/hand-pies1.png';
import HandPies2 from '../../assets/pictures/hand-pies2.png';
import HandPies3 from '../../assets/pictures/hand-pies3.png';
import Pastries1 from '../../assets/pictures/pastries1.png';
import Pastries2 from '../../assets/pictures/pastries2.png';
import Pastries3 from '../../assets/pictures/pastries3.png';


export default function Gallery() {
    return (
        <div className="carousel-contain">
            <Carousel autoPlay="true" dynamicHeight='true' infiniteLoop='true'>
                    <div>
                        <img src={Pie1} alt="Lemon Meringue Pie" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={HandPies1} alt="Hand-pies" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={Pastries3} alt="Various pastries" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={Pastries2} alt="Different pastries" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={Cake2} alt="Cake" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={Cookies3} alt="Various cookies" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div>
                        <img src={Pastries1} alt="Pastries1" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={HandPies2} alt="Some hand-pies" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={Cookies2} alt="Cookies" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div>
                        <img src={Cake1} alt="Cake" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div>
                        <img src={HandPies3} alt="Other hand-pies" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={Cookies1} alt="Cookies" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div>
                        <img src={Pie2} alt="Pie" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
        </div>
    );
}