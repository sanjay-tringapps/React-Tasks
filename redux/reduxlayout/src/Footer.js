import React from 'react'
import {useSelector} from 'react-redux';
export default function Footer() {
const elementValue = useSelector(state => state);
  return (
    <div class="footer">
    <h2>{elementValue[1]}</h2>
    </div>
  )
}
