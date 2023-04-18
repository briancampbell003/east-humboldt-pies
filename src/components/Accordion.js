import React, { useState } from 'react';
import MenuInsert from '../components/MenuInsert';

// INTERACTIVE ACCORDION- FIX LATER
// const Accordion = ({ title, content, price }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="accordion-item">
//       <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
//         <div>{title}</div>
//         <div className="accordion-btn">{isActive ? '-' : '+'}</div>
//       </div>
//       {isActive && <div className="accordion-content">
//           {content.map(({ item, description, price }) => (
//             <MenuInsert item={item} description={description} price={price} />

//           ))}
//       </div>}
//     </div>
//   );
// };

const Accordion = ({ title, content, price }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title">
        <div>{title}</div>
      </div>
      <div className="accordion-content">
          {content.map(({ item, description, price }) => (
            <MenuInsert item={item} description={description} price={price} />

          ))}
      </div>
    </div>
  );
};

export default Accordion;