import React from 'react'
import iconList from '../img/shopping-list.svg'
import plus from '../img/plus.svg'
import './list.less'

const List = props =>{

  return(
    <div className='list-wrap'>
      <div className="list-icon-list-wrap">
        <img src={iconList} className="list-icon-list" alt="logo" />
      </div>
      <ul className='list-ul'>
       { 
          props.mission.map((item,index)=>{
            return(
              <li key={item.key} className='list-li' onClick={()=>{props.changeMission(item)}}>
                {item.mission}
              </li>
            )
          })
        }
      </ul>
      <div className="list-icon-add-wrap" onClick={()=>{props.setListType(true)}}>
          <img src={plus} className="list-icon-add" alt="logo" />
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.mission === nextProps.mission && prevProps.isRun === nextProps.isRun
}
export default React.memo(List, listEqual);