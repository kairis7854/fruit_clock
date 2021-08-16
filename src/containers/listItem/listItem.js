import React from 'react'
import iconList from '../../assets/img/icon/shopping-list.svg'
import plus from '../../assets/img/icon/plus.svg'
import './listItem.less'

const ListItem = props =>{

  return(
    <div className='list'>
      <div className="list__iconList">
        <img src={iconList} className="list__iconList__IMG" alt="logo" />
      </div>
      <ul className='list__ul'>
       { 
          props.mission.map((item,index)=>{
            return(
              <li key={item.key} className='list__ul__li' onClick={()=>{props.changeMission(item)}}>
                {item.mission}
              </li>
            )
          })
        }
      </ul>
      <div className="list__iconAdd" onClick={()=>{props.setListType(true)}}>
          <img src={plus} className="list__iconAdd__IMG" alt="logo" />
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.mission === nextProps.mission && prevProps.isRun === nextProps.isRun
}
export default React.memo(ListItem, listEqual);