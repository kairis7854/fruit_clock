import React,{useState} from 'react'
import iconListAdd from '../../assets/img/icon/plus.svg'
import shoppingList from '../../assets/img/icon/shopping-list.svg'
import {db} from '../../common/Model'
import './listAdd.less'

const reg = /^\d*?$/;

const ListAdd = props =>{
  const now = new Date()
  const [data,setData] = useState({mission:'',time:''})
  
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
    db.mission.add({ id:now.getTime(),mission:data.mission, time:data.time*2, smoke:false });
    setData({mission:'',time:''})
    alert('添加任務成功!')
  }

  return(
    <div className='ListAdd'>
      <div className="ListAdd__iconAdd">
        <img src={iconListAdd} className="ListAdd__iconAdd__IMG" alt="logo" />
      </div>
      <form className='ListAdd__form' onSubmit={onSubmit} >
        <label>
          任務：
          <br/>
          <input
            name="mission"
            type="text"
            value={data.mission}
            onChange={getData} 
            autoComplete='off'
            />
        </label>
        <br />
        <label>
          時間(分)：
          <input
            name="time"
            type="text"
            value={data.time}
            onChange={getData.bind(this)}
            autoComplete='off'
            />
        </label>
        <button>確定</button>
      </form>
      <div className="ListAdd__iconList" onClick={()=>{props.setListType(false)}}>
          <img src={shoppingList} className="ListAdd__iconList__IMG" alt="logo" />
      </div>
    </div>
  )
}

// function listEqual(prevProps, nextProps) {
//   return prevProps.mission.length === nextProps.mission.length
// }
// export default React.memo(ListAdd, listEqual);
export default ListAdd
