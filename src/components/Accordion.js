import React, { useState } from 'react';
import MenuInsert from '../components/MenuInsert';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="accordion-btn">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
          {content.map(({ item, description }) => (
            <MenuInsert item={item} description={description} />

          ))}
      </div>}
    </div>
  );
};

export default Accordion;