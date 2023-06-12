import React from "react";
import "./style.css";
import spinlogo from "./logospin.gif";
import { useState, useEffect,setData, setError, getData, setLoading, fetchData } from 'react';
import getPassword from "./index.js";
import root from "./index.js";
export const backend_link = 'http://localhost:8080';
let current_length;


export default function App() {
  
  return (<>
    <title>NCG PASS GEN</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <div className="header">
      <img src={spinlogo} id="logospin" />
      <img src={spinlogo} id="logospin2" />
      <div className="inner_header">
        <div className="logo_container">
          <h1>
            <span>NCG</span> Password Generator
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
  const [isLoading, setLoading] = useState(true);
  const [didPost, setPost] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    getPassword(event.target[0].value);
    setPost(!didPost);
  }
  useEffect(() => {
    fetchWithRetry(backend_link).then((res) => res.json()).then((res) => {
      setData(res);
      setLoading(false);
      
    })
},[didPost]);
let result_box;
if (isLoading) {
  result_box = <p> Loading Results</p>;
}
else {
  result_box = data.map((passString) =>
  <p>{passString.password}</p>)
}
    return (<>
    <div className="rectangle">
<form onSubmit={handleSubmit}>
        Number of words in password: <input type="text"/>
        <button type="submit">Submit form</button>
      </form>
    </div>
    <div className="rectangle2 box">
    <p></p>
      <div className="encrypted_pass">{result_box}
      </div>
    </div>

    </>);
  
}



const fetchWithRetry = async (url, tries=2) => {
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
};