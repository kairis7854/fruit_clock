import React,{useState,useEffect} from 'react'
import {db} from '../../common/Model'
import './CalendarLiContent.less'

const CalendarLiContent = (props) => {
  const [mission,setMission] = useState('')
  useEffect(()=>{
    db.plan.where({
      year:props.dateInfo.year,
      month:props.dateInfo.month,
      date:props.dateInfo.date,
    }).toArray().then(res=> setMission(res) )
  },[props.dateInfo])

  const state = (e) =>{
    switch (e.state) {
      case 'wait':
        return <p style={{color:'gray'}}>(等待)</p>  
      case 'start':
        return <p style={{color:'skyblue'}}>(可執行)</p>  
      case 'done':
        return <p style={{color:'green'}}>(完成)</p>  
      case 'fail':
        return <p style={{color:'red'}}>(逾期)</p>  
      default:
        return null
    }
  }

  return(
    <>
      {
        mission  
         ? mission.map((item,index)=>
          <li className='CalendarLiContent' key={index}>
            {item.mission}{state(item)}
          </li>) 
         : null
      }
    </>
  )
}
export default CalendarLiContent