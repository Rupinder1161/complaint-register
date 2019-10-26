
import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {default as UUID} from "node-uuid";


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
     this.state = {
       index:UUID.v4(),  
      userInput: '',
      devicename:[],
      toDoList: ['gurpreet','singh','hello'],
      date:''
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.device = this.device.bind(this)
  }
  device(input){
    this.setState({
      devicename: input
    },() => console.log(input))

  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    } );
  }
  handleSubmit(input) {
    var newArray = this.state.toDoList.slice(); 
    newArray.push(input); 
    const devi = this.state.devicename
    const datea =  new Date().getTime()
    this.setState({
      toDoList: newArray,
      date: datea,
      devicename:devi
    });
  }
 
  render() {
    const items = this.state.toDoList.map(i =><tr><td>{this.state.index}</td><td>{this.state.devicename}</td><td>{i}</td><td><Button>approve</Button></td><td><Button>Declined</Button></td><td>{this.state.date}</td></tr>)
    return (
      <div style={style}>
        <form>
        <input value={this.state.devicename} onChange={(e) => this.device(e.target.value)} placeholder='enter device name'/>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Separate Items With Commas" /><br />
          </form>
        <button onClick={(e) => this.handleSubmit(e.target.value)}>Create List</button>
        <h1>My "To Do" List:</h1>
        <table>
        <tr>
             <th>Sr no.</th>
             <th>Product Name</th>
             <th>Decription</th>
             <th>approve</th>
             <th>Declined</th>
             <th>Time</th>
         </tr>
         {items}
        </table>
      </div>
    );
  }
};
const style ={
  textAlign : 'center',
  bacgroundColor:'red',
  margin: 5,
  width: '100%'

}
const margin = {
  marginLeft :20
}
  export default MyComponent;