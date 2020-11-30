import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import list from "./List";
import "./index.css";
function cdata(val){
   return( <App
    src={val.image} 
    name={val.name}/>
   );
}

ReactDOM.render(
    <React.Fragment>
    
{list.map(cdata)}

    </React.Fragment>,
    document.getElementById("root")
)