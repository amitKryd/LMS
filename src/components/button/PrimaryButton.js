import React from 'react'

const JoinFreeBtn = (props) => {
    const {title,bgColor,color} = props
    return  (
        <>
         <button className={`${bgColor} ${color} border-none rounded-md text-base px-5 h-10 cursor-pointer`}>
                {title}
            </button>
        </>
    )
}
export default JoinFreeBtn

