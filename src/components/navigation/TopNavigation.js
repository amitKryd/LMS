import React, { useState } from 'react';
import "../../css/navigation.css";
const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
        <div className='main_navigation_div'>
            <div className="navigate_header">
                <p className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>For Individuals</p>
                <p className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>For Universities</p>
                <p className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>For Corporates</p>
            </div>
        </div>
        
        </>
    );
}
export default Navigation