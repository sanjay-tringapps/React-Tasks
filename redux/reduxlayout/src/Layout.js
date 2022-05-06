import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer'

const store=createStore(appReducer)
export default function Layout() {


  return (
    <Provider store={store}>
    <div class="layout">
      
    <Header/>
    <Sidebar/>
    <Content/>
    <Footer/>
    </div>
    </Provider>
  )
}


