import './App.css';
import elephant from "./images/elephant.jpeg";
import React from 'react';


function App(props) {
  let image_arr = props.imageData()
  // code here
  return(
    <>
      <h1 className='heading'>Kalviam Gallery</h1>
      <div className='images'>
        
        <img src={elephant} className='img' alt="" />
        <img src={elephant} className='img' alt="" />
        <img src={elephant} className='img' alt="" />
        <img src={elephant} className='img' alt="" />
   
      </div>
    </>
  )
}

export default App;