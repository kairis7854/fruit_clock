import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import icon_play from '../../img/play-button.svg'
import icon_pause from '../../img/pause-button.svg'
import start from '../../music/blackout_harp1.mp3'
import end from '../../music/blackout_harp2.mp3'
import tomato from "../../img/fruit/tomato.png"
import strawberry from "../../img/fruit/strawberry.png"
import watermelon from "../../img/fruit/watermelon.png"
import cantaloupe from "../../img/fruit/cantaloupe.png"
import './clock.less'

function getTime(value){
  let sec = value % 60
  let min = parseInt(value/60)
  let sec0 = sec < 10 ? 0 : ''
  let min0 = min < 10 ? 0 : ''
  let time = [`${min0}${min}:${sec0}${sec}`]
  return time
}
const audio_start = new Audio(start)
const audio_end = new Audio(end)

const Clock = (props) =>{
  const fruitIMG = useSelector(state => state.fruit)
  const [time,setTime] = useState(Number)
  const [smoke,setSmoke] = useState(false)

  useEffect(() => {
    let interval
    if (props.isRun) {
        interval = setInterval(() => {
          setTime(time => time-1)
        }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.isRun])
  
  useEffect(() => {
    if(!smoke && props.isRun && time === 0){
      setTime(300)
      setSmoke(true)
      audio_start.play()
      return
    }
    if(smoke && time === 0){
      props.setNowMission({key:0,mission:'完成',time:0})
      props.setIsRun(!props.isRun)
      setSmoke(false)
      audio_end.play()
      props.setMission(e =>{
        let res = []
        e.find((item)=>{
         if(props.nowMission.key === item.key) return null
         else res.push(item) 
         return null
        })
        return res
      })
    }
  }, [time])// eslint-disable-line react-hooks/exhaustive-deps

  const tomatoIMG = (<img className='clock-fruit' src={tomato} style={{display:fruitIMG ==='1' ? 'block' : 'none'}} alt='fruit'/>)
  const strawberryIMG = (<img className='clock-fruit' src={strawberry} style={{display:fruitIMG ==='2' ? 'block' : 'none'}} alt='fruit'/>)
  const watermelonIMG = (<img className='clock-fruit' src={watermelon} style={{display:fruitIMG ==='3' ? 'block' : 'none' }} alt='fruit'/>)
  const cantaloupeIMG = (<img className='clock-fruit' src={cantaloupe} style={{display:fruitIMG ==='4' ? 'block' : 'none' }} alt='fruit'/>)
  const pauseButton = (<img className='clock-icon' src={icon_pause} onClick={()=>{onPause()}} style={{display:props.isRun ? 'block' : 'none'}} alt='icon_pause'/>)
  const playButton = (<img className='clock-icon' src={icon_play} onClick={()=>{onPlay()}} style={{display:props.isRun ? 'none' : 'block'}} alt='icon_pause'/>)

  const onPause = () => {
    props.setIsRun(!props.isRun)
    setSmoke(false)
    props.setNowMission({...props.nowMission,time:time,smoke: smoke ? true : false})
    props.setMission( mission => {
      mission.find((item)=>{
        if(item.key === props.nowMission.key){
          item.time = time
          item.smoke = smoke ? true : false
        } 
        return null
      })
      return mission
    }) 
  }
  
  const onPlay = () => {
    if(props.nowMission.key === 0){
      alert('任務已完成!請選擇新的任務。')
      return
    }
    if(props.nowMission.smoke === true){
      setSmoke(true)
    }
    props.setIsRun(!props.isRun)
    setTime(props.nowMission.time)
  }
  
  return(
    <div className='clock-wrap'>
      {/* <div className='test'>000</div> */}
      <div className='clock-mission'>{smoke ? '休息' : props.nowMission.mission}{smoke ? null : props.nowMission.smoke && '(休息)'}{pauseButton}{playButton}</div>
        {tomatoIMG}
        {strawberryIMG}
        {watermelonIMG}
        {cantaloupeIMG}
      <div>
       <p className='clock-Time'>{props.isRun ? getTime(time) : getTime(props.nowMission.time)}</p>
      </div>
    </div>
  )
}
export default Clock

