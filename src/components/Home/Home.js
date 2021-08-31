import React,{useState} from 'react'
import TopNav from '../TopNav/TopNav'
import Main from '../Main/Main'
import Calendar from '../../containers/Calendar/Calendar'
import './Home.less'

export default function Home(){
  const [homeType,setHomeType] = useState(true)
  
  return(
    <div className='Home'>
      <TopNav homeType={homeType} setHomeType={setHomeType}/>
      <Main homeType={homeType}/>
      <Calendar homeType={homeType}/>
    </div>
  )
}