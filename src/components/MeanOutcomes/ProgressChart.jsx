import React from 'react'
  
const ProgressChart = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: 10,
        width: '95%',
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
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
    
      </div>
    </div>
    )
}



export default ProgressChart
