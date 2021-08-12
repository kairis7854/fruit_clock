import React,{useState} from 'react'
import {nanoid} from 'nanoid'
import iconListAdd from '../img/plus.svg'
import shoppingList from '../img/shopping-list.svg'
import './list-add.less'

const reg = /^\d*?$/;

const ListAdd = props =>{
  const [data,setData] = useState({key:'',mission:'',time:''})
  const getData = (e) => {
    if(e.target.name === 'time' && !reg.test(e.target.value)){
      alert('請輸入數字')
      return 
    }
    setData({...data,[e.target.name]:e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(!data.mission || !data.time){
      alert('任務名稱或時間不能為空!')
      return
    }
    if(data.time > 9999){
      alert('時間不能超過9999分鐘!')
      return
    }
    props.setMission([...props.mission,{...data,time:data.time*60,key:nanoid()}])
    setData({key:'',mission:'',time:''})
    alert('添加任務成功!')
  }

  return(
    <div className='ListAdd-wrap'>
      <div className="ListAdd-icon-listAdd-wrap">
        <img src={iconListAdd} className="ListAdd-icon-listAdd" alt="logo" />
      </div>
      <form className='ListAdd' onSubmit={onSubmit} >
        <label>
          任務：
          <br/>
          <input
            name="mission"
            type="text"
            value={data.mission}
            onChange={getData} />
        </label>
        <br />
        <label>
          時間(分)：
          <input
            name="time"
            type="text"
            value={data.time}
            onChange={getData.bind(this)} />
        </label>
        <button className='ListAdd_button'>確定</button>
      </form>
      <div className="ListAdd-icon-list-wrap" onClick={()=>{props.setListType(false)}}>
          <img src={shoppingList} className="ListAdd-icon-list" alt="logo" />
      </div>
    </div>
  )
}

function listEqual(prevProps, nextProps) {
  return prevProps.mission.length === nextProps.mission.length
}
export default React.memo(ListAdd, listEqual);
