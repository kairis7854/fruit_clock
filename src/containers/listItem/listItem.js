import React  from 'react'
import {useDispatch } from 'react-redux'
import iconList from '../../assets/img/icon/shopping-list.svg'
import plus from '../../assets/img/icon/plus.svg'
import {db} from '../../common/Model'
import { useLiveQuery } from "dexie-react-hooks";
import {NOWMISSION} from '../../redux/action-types.js'
import './listItem.less'

const ListItem = props =>{
  const data = useLiveQuery(() => db.mission.toArray());
  const dispatch = useDispatch();
  const setNowMission =(item)=>{
    if(props.isRun) return
    dispatch({type:NOWMISSION,data:item})
  }

  return(
    <div className='list'>
      <div className="list__iconList">
        <img src={iconList} className="list__iconList__IMG" alt="logo" />
      </div>
      <ul className='list__ul'>
       { 
          data 
            ? data.map((item)=>{
                return(
                  <li key={item.id} className='list__ul__li' onClick={()=>{setNowMission(item)}}>
                    {item.mission}
                  </li>
                )
              })
            : null
        }
      </ul>
      <div className="list__iconAdd" onClick={()=>{props.setListType(true)}}>
          <img src={plus} className="list__iconAdd__IMG" alt="logo" />
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.isRun === nextProps.isRun
}
export default React.memo(ListItem, listEqual);