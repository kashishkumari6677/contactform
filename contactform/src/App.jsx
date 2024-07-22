import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import  Navigator from './config/Navigator'
function App(){
  return (
    <div>
      <BrowserRouter>
       <Navigator/>
      </BrowserRouter>
    </div>
  )
}


export default App