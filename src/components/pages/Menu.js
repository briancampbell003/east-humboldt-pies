import React from 'react';
import Accordion from '../../components/Accordion';
import { menuData } from '../../assets/menu-data'
import TopLeft from '../../assets/pictures/cookies2.png';
import BtmLeft from '../../assets/pictures/pie1.png';
import BtmRight from '../../assets/pictures/pie2.png';

export default function Menu() {
    return (
        <div className="menu-contain">
            <div className="accordion">
                <div className='accordion-flex'>
                    {menuData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
            <div className="menu-top-contain">
                <div className="menu-top-left">
                    <img src={TopLeft} alt="Cookies" />
                </div>
            </div>
            <div className="menu-btm-contain">
                <div className="menu-btm-left">
                    <img src={BtmLeft} alt="A pie" />
                </div>
                <div className="menu-btm-right">
                    <img src={BtmRight} alt="Another pie" />
                </div>
            </div>
        </div>
    );
}