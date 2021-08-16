import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import icon_play from '../../assets/img/icon/play-button.svg'
import icon_pause from '../../assets/img/icon/pause-button.svg'
import start from '../../assets/music/blackout_harp1.mp3'
import end from '../../assets/music/blackout_harp2.mp3'
import tomato from "../../assets/img/fruit/tomato.png"
import strawberry from "../../assets/img/fruit/strawberry.png"
import watermelon from "../../assets/img/fruit/watermelon.png"
import cantaloupe from "../../assets/img/fruit/cantaloupe.png"
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
      setTime(10)
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

  const tomatoIMG = (<img className='clock__fruitIMG' src={tomato} style={{display:fruitIMG ==='TOMATO' ? 'block' : 'none'}} alt='fruit'/>)
  const strawberryIMG = (<img className='clock__fruitIMG' src={strawberry} style={{display:fruitIMG ==='STRAWBERRY' ? 'block' : 'none'}} alt='fruit'/>)
  const watermelonIMG = (<img className='clock__fruitIMG' src={watermelon} style={{display:fruitIMG ==='WATERMELON' ? 'block' : 'none' }} alt='fruit'/>)
  const cantaloupeIMG = (<img className='clock__fruitIMG' src={cantaloupe} style={{display:fruitIMG ==='CANTALOUPE' ? 'block' : 'none' }} alt='fruit'/>)
  const pauseButton = (<img className='clock__switch' src={icon_pause} onClick={()=>{onPause()}} style={{display:props.isRun ? 'block' : 'none'}} alt='icon_pause'/>)
  const playButton = (<img className='clock__switch' src={icon_play} onClick={()=>{onPlay()}} style={{display:props.isRun ? 'none' : 'block'}} alt='icon_pause'/>)

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
    <div className='clock'>
      {/* <div className='test'>000</div> */}
      <div className='clock__mission'>{smoke ? '休息' : props.nowMission.mission}{smoke ? null : props.nowMission.smoke && '(休息)'}{pauseButton}{playButton}</div>
      <div>
        {tomatoIMG}
        {strawberryIMG}
        {watermelonIMG}
        {cantaloupeIMG}
      </div>
      <div>
       <p className='clock__time'>{props.isRun ? getTime(time) : getTime(props.nowMission.time)}</p>
      </div>
    </div>
  )
}
export default Clock

