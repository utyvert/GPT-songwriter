import React, {useState} from 'react'
// import {Link, Route, Routes } from 'react-router-dom';
import AddTopicComponent from '../components/AddTopicComponent';
import Genre from '../components/Genre';
import Structure from '../components/Structure';


export default function Home() {
  return (
      <div className="Home">
        <div className="horiz-div">
          <Genre />
          <Structure />
        </div>
        
        <AddTopicComponent />
      </div>
  )
}


