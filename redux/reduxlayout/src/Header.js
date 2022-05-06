import React from 'react'

import {useSelector} from 'react-redux';
function Header() {
const elementValue = useSelector(state => state);
  return (
    <div class="header"> 
        <h2>{elementValue[0]}</h2>

    </div>
  )
}

export default Header;
