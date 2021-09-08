import React,{Component} from 'react'
import CalendarForm from '../../components/CalendarForm/CalendarForm'
import CalendarLiContent from '../../components/CalendarLiContent/CalendarLiContent'
import {db} from '../../common/Model'

import  './Calendar.less'

function changeLength(e){
  let res = e.toString()
  if(res.length === 1 )res = `0${res}`
  return res
}

class Calendar extends Component{
  state = {
    initYear:'',
    initMonth:'',
    today:'',
    year:'',
    month:'',
    date:'',
    allDate:'',
    showForm: false,
  }
  componentDidMount(){
    const now = new Date()　
    const date = now.getDate()
    const month = now.getMonth()+1
    const year = now.getFullYear()
    const whichMonth = new Date(year,month,0)　
    const totalDate =  whichMonth.getDate()

    this.setState({
      initYear:year,
      initMonth:month,
      today:date,
      year:year,
      month:month,
      date:date,
      totalDate:totalDate,  
    })


    db.plan  //檢查計畫是否逾期
    .where('state')
    .notEqual('done')
    .and(res=>{
      let a = `${res.year}${changeLength(res.month)}${changeLength(res.date)}`
      let b = `${year}${changeLength(month)}${changeLength(date)}`
       return  a < b
    })
    .modify({state:'fail'})
  }

  changeYear = (e) => {
    if(e.target.value === '請選擇' ) return 
    const value = Number(e.target.value)
    const whichMonth = new Date(value,this.state.month,0)　
    const totalDate =  whichMonth.getDate()
    this.setState({year:value,totalDate:totalDate})
  }
  changeMonth = (e) => {
    if(e.target.value === '請選擇' ) return 
    const value = Number(e.target.value)
    const whichMonth = new Date(this.state.year,value,0)　
    const totalDate =  whichMonth.getDate()
    this.setState({month:value,totalDate:totalDate})
  }
  closeForm = () => {
    this.setState({showForm:false})
  }
  openForm = (e) => {
    this.setState({showForm:true,date:e})
  }

  render(){
    let {homeType} = this.props 
    const dateLi = new Array(this.state.totalDate).fill("").map((x, index) => 
      <li className='Calendar__loader__ul__li' key={index + 1} onClick={()=>{this.openForm(index + 1)}}>
        <div>{index + 1}</div>
        <ul className='Calendar__loader__ul__li__ul'>
          <CalendarLiContent dateInfo={{year:this.state.year,month:this.state.month,date:index + 1}}/>
        </ul>
      </li>
    )
    const monthOption = new Array(12).fill("").map(
      (x, index) => <li key={index + 1} onClick={this.changeMonth} value={index + 1}>{index + 1}</li>
    )

    return(
      <div className='Calendar' style={{display:!homeType ? 'flex':'none'}} >
        <div className='Calendar__loader'> 
          <div className='Calendar__loader__Top'>
          <div className='Calendar__loader__Top__close' onClick={()=>{this.props.setHomeType(true)}}></div>
            <div className='Calendar__loader__Top__Month'>       
              <div className='Calendar__loader__Top__Month__menu'>
                <div className='Calendar__loader__Top__Month__menu__select'>
                  <div>
                    <div >{this.state.month}</div>
                    <div>月</div>  
                    <div className='Calendar__loader__Top__Month__menu__select__icon'></div>
                  </div>
                  <ul className='Calendar__loader__Top__Month__menu__select__ul'>
                    {monthOption}
                  </ul>
                </div> 
              </div>
            </div>
            <div className='Calendar__loader__Top__Year'>       
              <div className='Calendar__loader__Top__Year__menu'>
                <div className='Calendar__loader__Top__Year__menu__select'>
                  <div>
                    <div>{this.state.year}</div>
                    <div>年</div> 
                    <div className='Calendar__loader__Top__Year__menu__select__icon'></div>
                  </div>
                  <ul className='Calendar__loader__Top__Year__menu__select__ul'>
                    <li onClick={this.changeYear} value={this.state.initYear}>{this.state.initYear}</li>
                    <li onClick={this.changeYear} value={this.state.initYear+1}>{this.state.initYear+1}</li>
                    <li onClick={this.changeYear} value={this.state.initYear+2}>{this.state.initYear+2}</li>
                    <li onClick={this.changeYear} value={this.state.initYear+3}>{this.state.initYear+3}</li>
                    <li onClick={this.changeYear} value={this.state.initYear+4}>{this.state.initYear+4}</li>
                  </ul>
                </div> 
              </div> 
            </div>
          </div>
          <ul className='Calendar__loader__ul'>
            {dateLi}
          </ul>
        </div>
        <div className='Calendar__Form' style={{display:this.state.showForm?'block':'none'}} >
            <CalendarForm 
              closeForm={this.closeForm} 
              timeInfo={{
                year:this.state.year,
                month:this.state.month,
                date:this.state.date,
                initYear:this.state.initYear,
                initMonth:this.state.initMonth,
                today:this.state.today,
              }}
            />
          </div> 
      </div>
    )
  }
}
export default Calendar

