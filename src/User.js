import React from 'react';
export default class User extends React.Component {
  componentWillUnmount(){
    alert("test")
   }
  render() {
    return (
      <div>
        <ol>
          <li>name-irfan</li>
          <li>email-irfan@123</li>
          <li>phone-234234234</li>
        </ol>
      </div>
    );
  }
}
