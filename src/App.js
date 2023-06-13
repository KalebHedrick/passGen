import React from "react";
import "./style.css";
import spinlogo from "./logospin.gif";
import { useState, useEffect } from 'react';
export const backend_link = 'http://localhost:8080';
let first_render = true;
let final_pass = "";

export default function App() {
  
  return (<>
    <title>passGen</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div className="header">
      <img src={spinlogo} id="logospin" />
      <img src={spinlogo} id="logospin2" />
      <div className="inner_header">
        <div className="logo_container">
          <h1>
            Password Generator
          </h1>
        </div>
      </div>
    </div>
    
    <MyPassword/>
    
    </>
  );
}

function MyPassword() {
  const [data, setData] = useState([]);
  let [isLoading, setLoading] = useState(true);
  const [didPost, setPost] = useState(false);
  
  function getPassword(length) {
    if (length == 0) {
      length = 4;
    }
    const element = document.querySelector('#post-request .article-id');
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passLength: length })
};
fetch(backend_link + '/passKey', requestOptions)
.then(res => setPost(!didPost))
   // .then(data => element.innerHTML = data.id );
}

  function handleSubmit(event) {
   setLoading(true);
    event.preventDefault();
    getPassword(event.target[0].value);
  }

  useEffect(() => {
    if (first_render) {first_render = false;}
    else {
    fetchWithRetry(backend_link).then((res) => res.json()).then((res) => {
      setLoading(false);
      setData(res); 
    })}
},[didPost]);

let result_box;
if(first_render) {}
else {
if(isLoading) {
result_box = <p> Loading Results</p>;
console.log('loading condition');     //log the api is loading
}
else {
  result_box = data.map((passString) =>
  <p key = {passString.id }>{passString.password}</p>)
  final_pass = result_box;
}
}
console.log(result_box); //log the password
    return (<>
    <div className="rectangle">
<form onSubmit={handleSubmit}>
         <center>Password Length:<input type="text" placeholder = "Default: 4" className="textbox"/></center>
        <center><button type="submit" className = "submit">Generate Password</button></center>
      </form>
    </div>
    <div className="rectangle2 gradient-border">
    <p></p>
      <div className="encrypted_pass" id = "select" onMouseEnter={() => selectElementContents(document.getElementById("select"))}>{result_box}</div>
      </div>
      <center><button className="submit copy" onClick={() => {navigator.clipboard.writeText(result_box[0].props.children);}}>
        Copy to Clipboard
      </button></center>
    </>);
  
}



const fetchWithRetry = async (url, tries=20) => {
  const errs = [];
  
  for (let i = 0; i < tries; i++) {
    // log for illustration
    console.log(`trying GET '${url}' [${i + 1} of ${tries}]`);
    
    try {
      const ret = await fetch(url);
      if (ret.status < 400) {
        return ret;
      }
    }
    catch (err) {
      errs.push(err);
    }
  }
  
  throw errs;
}
function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}