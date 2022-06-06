import React from "react";
import "./style.css";
import User from "./User"
export default class App extends React.Component {
 constructor(){
   super();
   this.state={
     toggle:true
   }
 }
 update(){
   this.setState({
     toggle:!this.state.toggle
   })
 }
  render(){
    return (
      <div>
        <h1>ComponentWillUnmount example</h1>
     {
       this.state.toggle?
      <User/>
     :
     null
     }
        <button onClick={()=>this.update()}>delete user</button>
      </div>
    );
  }
}
