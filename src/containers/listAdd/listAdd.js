import React,{useState} from 'react'
import iconListAdd from '../../assets/img/icon/plus.svg'
import shoppingList from '../../assets/img/icon/shopping-list.svg'
import {db} from '../../common/Model'
import './listAdd.less'

const reg = /^\d*?$/;

const ListAdd = props =>{
  const now = new Date()
  const [data,setData] = useState({mission:'',time:''})
  const [formAlert,setFormAlert] = useState('')
  
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
      setFormAlert('任務名稱或時間不能為空!')
      setTimeout(() => {
        setFormAlert('')
      }, 1800);
      return
    }
    if(data.mission.length > 9){
      setFormAlert('任務名稱不能超過9個字!')
      setTimeout(() => {
        setFormAlert('')
      }, 1800);
      return
    }
    if(data.time > 9999){
      setFormAlert('時間不能超過9999分鐘!')
      setTimeout(() => {
        setFormAlert('')
      }, 1500);
      return
    }
    db.mission.add({ id:now.getTime(),mission:data.mission, time:data.time*60, smoke:false });
    setData({mission:'',time:''})
    setFormAlert('添加成功')
    setTimeout(() => {
      setFormAlert('')
    }, 1500);
  }

  return(
    <div className='ListAdd'>
      <div className="ListAdd__iconAdd">
        <img src={iconListAdd} className="ListAdd__iconAdd__IMG" alt="logo" />
      </div>
      <form className='ListAdd__form' onSubmit={onSubmit} >
        <label>
          <h2 className='ListAdd__form__title'>新增任務：</h2>
          <input
            name="mission"
            type="text"
            value={data.mission}
            onChange={getData} 
            autoComplete='off'
            placeholder='名稱'
            />
        </label>
        <br />
        <label>
          {/* 時間(分)： */}
          <input
            name="time"
            type="text"
            value={data.time}
            onChange={getData.bind(this)}
            autoComplete='off'
            placeholder='時間(分)'
            />
        </label>
        <div className='ListAdd__form__check'>
          <button>
            確定
          </button>
          <p className='ListAdd__form__check__alert' style={{color:formAlert === '添加成功' ? 'rgb(77, 255, 53)' : 'rgb(255, 82, 82)'}}>{formAlert}</p>
        </div>
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

