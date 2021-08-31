import React,{Component} from 'react'
import CalendarForm from '../../components/CalendarForm/CalendarForm'
import CalendarLiContent from '../../components/CalendarLiContent/CalendarLiContent'
import {db} from '../../common/Model'

import  './Calendar.less'


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
    const date = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();
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

    db.plan
    .where('state')
    .equals('wait')
    .and(res=>{return res.year <= year})
    .and(res=>{return res.month <= month})
    .and(res=>{return res.date <= date})
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
      <li className='Calendar__ul__li' key={index + 1} onClick={()=>{this.openForm(index + 1)}}>
        <div>{index + 1}</div>
        <ul className='Calendar__ul__li__ul'>
          <CalendarLiContent dateInfo={{year:this.state.year,month:this.state.month,date:index + 1}}/>
        </ul>
      </li>
    )
    const monthOption = new Array(12).fill("").map((x, index) => <option key={index + 1}>{index + 1}</option>)

    return(
      <div className='Calendar' style={{display:!homeType ? 'flex':'none'}} >
        <div className='Calendar__Top'>
          <div className='Calendar__Top__Year'>
            <div>{this.state.year}</div>
            <div>Year</div>
            <select  onChange={this.changeYear}>
              <option value="請選擇">請選擇</option>
              <option value={this.state.initYear}>{this.state.initYear}</option>
              <option value={this.state.initYear+1}>{this.state.initYear+1}</option>
              <option value={this.state.initYear+2}>{this.state.initYear+2}</option>
              <option value={this.state.initYear+3}>{this.state.initYear+3}</option>
              <option value={this.state.initYear+4}>{this.state.initYear+4}</option>
            </select>
          </div>
          <div className='Calendar__Top__Month'>
            <div>{this.state.month}</div>
            <div>Month</div>
            <select defaultValue={this.state.month} onChange={this.changeMonth}>
              <option>請選擇</option>
              {monthOption}
            </select>
          </div>
        </div>
        <ul className='Calendar__ul'>
          {dateLi}
        </ul>
        <div className='CalendarForm' style={{display:this.state.showForm?'block':'none'}} >
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

