import React,{useState} from 'react'
import "../css/courses.css"
const CoursesComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
      <div className="main_courses_div">
        <h2>Get Started with your Courses today!</h2>
        <div className='for_listing_courses'>
            <ul>
                <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>Data Analyst</li>
                <li  className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>Project Manager</li>
                <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>Digital Markketer</li>
                <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>IT Support Specialist</li>
                <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>Bookkeeper</li>
                <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleItemClick(5)}>Cybersecurity</li>
                <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleItemClick(6)}>Front End Developer</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default CoursesComp
