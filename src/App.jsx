import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function App(props){

 return(

<div className="card">
  <card>
  <img src={props.src} />
  <div className="container">
 <h4><b>{props.name}</b></h4> 
  </div></card>
</div>

);
}
export default App;