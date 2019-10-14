
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
      devicename:'Baby kiffer',
      toDoList: ['gurpreet','singh','hello'],
      date:''
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  device(e){
    this.setState({
      device:e.target.value
    })

  }
  handleSubmit() {
    var newArray = this.state.toDoList.slice(); 
    newArray.push(this.state.userInput); 
    
    this.setState({
      toDoList: newArray,
      date: new Date().toLocaleString()
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i =><tr><td>{this.state.index}</td> <td>{i}</td><td>{i}</td><td><Button>approve</Button></td><td><Button>Declined</Button></td><td>{this.state.date}</td></tr>)
    return (
      <div style={style}>
        <form>
        <input value={this.state.devicename} onChange={this.handleChange} placeholder='enter device name'/>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Separate Items With Commas" /><br />
          </form>
        <button onClick={this.handleSubmit}>Create List</button>
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
        {/* <ul>
        {items} {this.state.index}
        </ul> */}
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