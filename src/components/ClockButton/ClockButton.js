import React from 'react'

import './ClockButton.less'

const ClockButton = (props) => {

  return(
    <div  className='ClockButton' title='時鐘'> 
      <div className='ClockButton__imgWrap'>
        <div className='ClockButton__imgWrap__img' onClick={()=>{props.props.setHomeType(true)}} ></div>
      </div>
    </div> 
  )
}
export default ClockButton