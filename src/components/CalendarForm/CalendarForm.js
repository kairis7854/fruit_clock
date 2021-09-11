import React,{useState} from 'react'
import {db} from '../../common/Model'
import { useLiveQuery } from 'dexie-react-hooks';

import './CalendarForm.less'

const reg = /^\d*?$/;

const CalendarForm = (props) => {
  const [mission,setMission] = useState('')
  const [time,setTime] = useState('')

  const saveMission = (e) => {
    setMission(e.target.value)
  }
  const saveTime = (e) => {
    if(!reg.test(e.target.value)){
      alert('請輸入數字')
      return 
    }
    setTime(e.target.value)
  }
  const Submit = () => {
    if(!mission || !time){
      alert('任務名稱或時間不能為空!')
      return
    }
    if(mission.length > 9){
      alert('任務名稱不能超過9個字!')
      return
    }
    if(time > 9999){
      alert('時間不能超過9999分鐘!')
      return
    }
    const now = new Date()
    db.plan.add({ 
      id:now.getTime(),
      mission:mission, 
      time:time, 
      smoke:false,
      year:props.timeInfo.year,
      month:props.timeInfo.month,
      date:props.timeInfo.date,
      state:'wait',
    });
    alert('提交成功')
    setMission('')
    setTime('')
    props.closeForm()
  }

  const deletePlan = (id) => {
    db.plan.delete(id)
  }

  const planLi = useLiveQuery(
    ()=>db.plan.where({
        year:props.timeInfo.year,
        month:props.timeInfo.month,
        date: props.timeInfo.date,
      }).toArray()
    ,[props.timeInfo]
  )

  const addPlan = () =>{
    const {initYear,initMonth,today,year,month,date } = props.timeInfo
    const now = new Date(initYear, initMonth-1, today);
    const select = new Date(year, month-1, date);
    const nowTime = now.getTime()
    const selectTime = select.getTime()

    if(nowTime <= selectTime){
      return(
        <div className='CalendarForm__inner__addPlan'>
          <strong> 新增計劃：</strong>
          <div>名稱  <input type="text" name="mission" autoComplete='off' onChange={saveMission.bind(this)} value={mission}/></div>
          <div>時間  <input type="text" name="time" autoComplete='off' onChange={saveTime} value={time} placeholder='單位:分鐘'/></div>
          <div>
            <input type="button" value="取消" onClick={props.closeForm} />
            <input type="button" value="提交" onClick={Submit}/>
          </div>
        </div>
      )
    }
    return null
  }

  return(
    <div className='CalendarForm'  > 
      <div className='CalendarForm__outside' onClick={props.closeForm}></div>
      <form className='CalendarForm__inner'>
        <div className='CalendarForm__inner__close' onClick={props.closeForm}></div>
        <div className='CalendarForm__inner__date'>{props.timeInfo.date}</div>
        <div className='CalendarForm__inner__plan'>
          <strong> 計劃：</strong>
          <ul>
            {planLi 
              ? planLi.map((e)=> <li key={e.id}>{e.mission}/{e.time}分鐘<div onClick={()=>{deletePlan(e.id)}}>刪除</div></li>) 
              : ''
            }
          </ul>
        </div>
        {addPlan()}
      </form>
    </div>  
  )
}
export default CalendarForm