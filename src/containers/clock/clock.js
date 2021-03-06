import React,{useState,useEffect} from 'react'
import {useSelector } from 'react-redux'
import icon_play from '../../assets/img/icon/play-button.svg'
import icon_pause from '../../assets/img/icon/pause-button.svg'
import start from '../../assets/music/blackout_harp1.mp3'
import end from '../../assets/music/blackout_harp2.mp3'
import {db} from '../../common/Model'
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
  const data = useSelector(state => state.mission)
  const speed = useSelector(state => state.speed)
  const [time,setTime] = useState(Number)
  const [smoke,setSmoke] = useState(false)
  const [nowMission,setNowMission] = useState({id:'',mission: '',time:'',smoke:''})

  useEffect(()=>{ //從IndexedDB獲取數據
    db.mission.toArray().then((res)=>{
      setNowMission({
        id:res[0] ? res[0].id : 0,
        mission:res[0] ? res[0].mission : '任務',
        time:res[0] ? res[0].time : 0,
        smoke:res[0] ? res[0].smoke : false,
      })
    })
  },[])

  useEffect(()=>{ //從ListItem獲取數據
    setNowMission(data)
    if(data.id === 0 ) setSmoke(false)
  },[data])

  useEffect(() => { //計時器
    let interval
    if (props.isRun) {
        interval = setInterval(() => {
          setTime(time => time-1)
        }, speed)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [props.isRun,speed])

  useEffect(() => { //時鐘邏輯
    if(!smoke && props.isRun && time === 0){
      setTime(300)
      setSmoke(true)
      audio_start.play()
      return
    }
    if(smoke && time === 0){
      props.setIsRun(!props.isRun)
      setSmoke(false)
      audio_end.play()
      db.mission.delete(nowMission.id)
      db.plan.update(nowMission.id,{state:'done'})
      setNowMission({mission:'完成',time:0})
    }
  }, [time])// eslint-disable-line react-hooks/exhaustive-deps

  const onPause = () => {
    props.setIsRun(!props.isRun)
    setNowMission({...nowMission,time:time,smoke: smoke ? true : false})
    db.mission.put({id:nowMission.id,mission:nowMission.mission,time:time,smoke:smoke ? true : false})
    setSmoke(false)
  }
  
  const onPlay = () => {
    if(nowMission.id === 9){ //代表初始加載
      return
    }
    if(nowMission.id === 0){
      alert('請選擇或創建新的任務。')
      return
    }
    if(nowMission.mission === '完成'){
      alert('任務已完成!請選擇新的任務。')
      return
    }
    if(nowMission.smoke === true){
      setSmoke(true)
    }
    props.setIsRun(!props.isRun)
    setTime(nowMission.time)
  }

  const pauseButton = (
    <div className='clock__timeWrap__switch'  style={{display:props.isRun ? 'flex' : 'none'}} onClick={()=>{onPause()}}>
      <img  src={icon_pause} alt='icon_pause'/>
      <div>暫停</div>
    </div>
  )
  const playButton = (
    <div className='clock__timeWrap__switch' style={{display:props.isRun ? 'none' : 'flex'}}  onClick={()=>{onPlay()}} > 
      <img  src={icon_play} alt='icon_pause'/>
      <div>開始</div>
    </div>
  )

  return(
    <div className='clock'>
      {/* <div className='test'>000</div> */}
      <div className='clock__mission'>
        <p>{smoke ? '休息' : nowMission.mission}{smoke ? null : nowMission.smoke && '(休息)'}</p>
      </div>
      <div className='clock__timeWrap'>
        <p className='clock__timeWrap__time'>
          {props.isRun ? getTime(time) : getTime(nowMission.time)}
        </p>
        {pauseButton}{playButton}
      </div>
    </div>
  )
}
export default Clock

