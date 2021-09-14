import React,{useEffect}  from 'react'
import {useDispatch,useSelector } from 'react-redux'
import iconList from '../../assets/img/icon/shopping-list.svg'
import cancel from '../../assets/img/icon/cancel.svg'
import plus from '../../assets/img/icon/plus.svg'
import {db} from '../../common/Model'
import { useLiveQuery } from "dexie-react-hooks";
import {NOWMISSION} from '../../redux/action-types.js'
import {CLEAN_MISSION} from '../../redux/action-types.js'
import { reqMusic } from '../../api'
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

  const nowMission = useSelector(state => state.mission)
  const dispatch = useDispatch();
  const setNowMission = (item) => {
    if(props.isRun) return
    dispatch({type:NOWMISSION,data:item})
  }

  useEffect(()=>{  //重製後的初始數據加載
    if(data && data.length && data[0].id === 9){
      async function start(){
        let first = await reqMusic()
        db.mission.bulkAdd([
            {id:1,mission: first,time:4,smoke:false},
            {id:2,mission:await reqMusic(),time:5,smoke:false},
            {id:3,mission:await reqMusic(),time:6,smoke:false},
            {id:4,mission:await reqMusic(),time:4,smoke:false}
          ]);
        db.mission.delete(9)
        dispatch({type:NOWMISSION,data:{id:1,mission: first,time:3,smoke:false}})//沒有使用state或props
      }
      start()
    }
  },[data])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(()=>{
    if(plan && plan.length > 0){
      plan.forEach((item,index)=>{
        db.mission.add({ id:item.id,mission:item.mission, time:item.time*2, smoke:false });
        db.plan.update(item.id,{state:'start'})
      })
    } 
  },[plan])

  const cancelMission = (e) => {
    if(nowMission.id === e ){
      props.setIsRun(false)
      dispatch({type:CLEAN_MISSION,data:{id:0,mission:'任務',time:0,smoke:false}})
    }
    db.plan.delete(e)
    db.mission.delete(e)
  }

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
                  <li key={item.id} className='list__ul__li'>
                    <div className='list__ul__li__content' onClick={()=>{setNowMission(item)}}>{item.mission}</div>
                    <div className='list__ul__li__cancel'>
                      <img className='list__ul__li__cancel__IMG' src={cancel} onClick={()=>{cancelMission(item.id)}} alt='cancel'/> 
                    </div>
                  </li>
                )
              })
            : <li className='list__ul__li'>暫無任務</li>
        }
      </ul>
      <div className="list__iconAdd" onClick={()=>{props.setListType(true)}}>
          <img src={plus} className="list__iconAdd__IMG" alt="logo" />
          {
            data && data.length > 0
              ? null
              : <p  className="list__iconAdd__alert">點擊添加</p>
          }
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.isRun === nextProps.isRun
}
export default React.memo(ListItem, listEqual);