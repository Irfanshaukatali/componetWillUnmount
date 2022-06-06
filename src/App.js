import React from "react";
import "./style.css";
import Prop from "./Prop"
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
      <Prop/>
     :
     null
     }
        <button onClick={()=>this.update()}>delete user</button>
      </div>
    );
  }
}
