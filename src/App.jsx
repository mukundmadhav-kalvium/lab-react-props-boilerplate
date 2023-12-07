import React from "react";
import './App.css';
import elephant from "./images/elephant.jpeg";
import { imageData } from "./components/DataComponent";

function App(props) {
  let imgArr = props.imageData()

  return(
    <>
      <h1>Kalvium Gallery</h1>
      <div className='grid'>
        {imgArr.map((e)=>{
          return (
            <img src={e.img} alt="elephant" className='image'/>
          )
        })}
      </div>
    </>

  )
}

export default App;
