import React,{useState} from 'react'

const SecondaryButton = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className='flex gap-4 items-center  pt-8 pb-3'>
{props.data.map((item,index) =>  <button className={`border border-gray-300 px-4 py-2 rounded-md 
              ${index === activeIndex ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}
            `}
            onClick={() => handleButtonClick(index)}>{item?.popular}</button>)}
            {/* <img src={process.env.PUBLIC_URL + "/public/arrow-right.png"}  /> */}
            <img
          src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
          alt="arrow"
          h-10
        />
      </div>
    </>
  )
}

export default SecondaryButton
