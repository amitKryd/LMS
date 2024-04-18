import React from 'react'
 
const ProgressBar = ({bgcolor,progress,height,width,text,value,textColor}) => {
    
    const Parentdiv = {
        height: height,
        width: width,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 4,
        color: 'black',
        fontWeight: 900
      }
       
    return (
        <div className='px-2'>
            <div className='flex justify-between'>
            <span style={{fontSize:"14px", fontWeight:"bold"}}>{text}</span>
            <span style={{color:textColor}}>{value}</span>
            </div>
    <div style={{ ...Parentdiv, marginBottom: '15px' }}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
    </div>
    )
}
 
export default ProgressBar;