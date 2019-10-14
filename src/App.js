import React from 'react';
import XLSX from 'xlsx';
import './App.css';
const lg = 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
const mg = 'https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/op-background-tech-1.jpg'
const bg = 'https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
const background = [bg,mg,lg,'silver','orange']



  const input = (props) => {

      return(
        <div value = {props} ></div>
      )

  }

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      reset:'',
      backgornd:'',
      data : ''
    };
    // change code below this line
      this.increment = this.increment.bind(this)
      this.reset = this.reset.bind(this)
      this.api = this.api.bind(this)
          // change code above this line
  }

   api(event){
      this.setState({
         data : event.target.value
      })


   }
  // change code below this line
 increment(){
   this.setState(
     {
       count: new Date().toLocaleString(),
       reset:'',
       backgornd:background[(Math.floor(Math.random() * 3))]
     }
   )
 }
 reset(){
   this.setState({
    count: 0,
    reset:'',
    backgornd:background[(Math.floor(Math.random() * 5))]
   })
 }
 componentDidMount(){
   this.increment();
   this.reset()
  this.interval = setInterval(this.increment, 1000);

 }
 
  
  // change code above this line
  render() {
    // const d = document.InnerHeight()
    const b = this.state.backgornd
    const countl = this.state.count
    if(countl <= 20){
    return (
      <div style = {{height:'200px', width:'100%',backgroundImage:'url(' + b + ')'}}>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
        <input value = {this.state.data} onChange = {this.api}></input>
      </div>
    );}
    else{
      return(
        <div style = {{height:'200px', width:'100%',backgroundColor:b}}>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1 value= {this.state.count}>Current Count: {this.state.count}</h1>
        <h1> Counter is over 60 sec : {this.state.data}</h1>
        <input value = {this.state.data} onChange = {this.api}></input>
        <h1 value ={this.state.data}></h1>
      </div>
      )
    }
  }
};


export default Counter;
