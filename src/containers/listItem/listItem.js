import React,{useEffect}  from 'react'
import {useDispatch } from 'react-redux'
import iconList from '../../assets/img/icon/shopping-list.svg'
import plus from '../../assets/img/icon/plus.svg'
import {db} from '../../common/Model'
import { useLiveQuery } from "dexie-react-hooks";
import {NOWMISSION} from '../../redux/action-types.js'
import './listItem.less'

function getTime(){
  const now = new Date()　
  const date = now.getDate();
  const month = now.getMonth()+1;
  const year = now.getFullYear();
  return {year,month,date}
}

const ListItem = props =>{
  const data = useLiveQuery(() => db.mission.toArray());
  const plan = useLiveQuery(() => db.plan.where({
    year:getTime().year,
    month:getTime().month,
    date: getTime().date,
    })
    .and(res=> res.state === 'wait')
    .toArray()
  ,[])

  const dispatch = useDispatch();
  const setNowMission = (item) => {
    if(props.isRun) return
    dispatch({type:NOWMISSION,data:item})
  }

  useEffect(()=>{
    if(plan && plan.length > 0){
      plan.forEach((item,index)=>{
        db.mission.add({ id:item.id,mission:item.mission, time:item.time*2, smoke:false });
        db.plan.update(item.id,{state:'start'})
      })
    } 
  },[plan])

  return(
    <div className='list'>
      <div className="list__iconList">
        <img src={iconList} className="list__iconList__IMG" alt="logo" />
      </div>
      <ul className='list__ul'>
        { 
          data && data.length > 0
            ? data.map((item)=>{
                return(
                  <li key={item.id} className='list__ul__li' onClick={()=>{setNowMission(item)}}>
                    {item.mission}
                  </li>
                )
              })
            : <li key='111' className='list__ul__li'>暫無任務</li>
        }
      </ul>
      <div className="list__iconAdd" onClick={()=>{props.setListType(true)}}>
          <img src={plus} className="list__iconAdd__IMG" alt="logo" />
          {
            data && data.length > 0
              ? null
              : <p className="list__iconAdd__alert">點擊添加</p>
          }
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.isRun === nextProps.isRun
}
export default React.memo(ListItem, listEqual);