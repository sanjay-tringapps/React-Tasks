import React from 'react'


import {connect} from 'react-redux'
import {addTask} from './actions'
import {useDispatch, useSelector} from 'react-redux';
function Header({appState,addNewTask}) {
const elementValue = useSelector(state => state);
const dispatch = useDispatch();
  return (
    <div class="header"> 
        <h2>{elementValue[0]}</h2>

    </div>
  )
}






  export default Header;