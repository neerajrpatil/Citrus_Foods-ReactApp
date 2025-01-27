import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apple from './App';
import './App.css';
import axios from 'axios';

function handleQuery(event){
    if(event.keyCode === 13){
      let query = document.querySelector("#srch").value;
      console.log(query);
      axios
       .post("http://127.0.0.1:3001/srch",{
        srch:query
       })
       .then((res)=>{console.log(res)})
       .catch(error => console.log(error));
    }
}

function App(){
    return(
        <div>
            <nav class="navbar navbar-expand-xl  navbar-light bg-danger pl-5 pb-3">
            <ul type="none" class="navbar-nav mr-auto"> 
                <li class="nav-item">
                <a class="navbar-brand" href="#">
                    <h2 className='branding' id="brand">citrus</h2> 
                </a>      
                </li>
                <li class="nav-item">
                    <input onKeyDown={(event)=>{handleQuery(event)}} id="srch" type="text" className="search-bar" placeholder='search' maxLength={15}></input>
                </li>
            </ul>
            </nav>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App></App>
        <Apple></Apple>
    </div>
);
