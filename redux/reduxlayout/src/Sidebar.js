import React from 'react'
import {useSelector} from 'react-redux';

export default function Sidebar() {
  const elementValue = useSelector(state => state);
  return (
    <div class="sidebar">
      <h2>SIDEBAR</h2>
    <br></br>
    <h3>{elementValue[2]}</h3>
    <h3>{elementValue[3]}</h3>
    <h3>{elementValue[4]}</h3>
    
    </div>

  )
}
