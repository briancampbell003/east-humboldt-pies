import React from 'react';
import Accordion from '../../components/Accordion';
import { menuData } from '../../assets/menu-data'

export default function Menu() {
    return (
        <div>
            <div className="accordion">
                {menuData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
}