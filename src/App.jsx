import { useState } from 'react'

import './App.css'
import HookCounterOne from './components/useState/HookCounterOne'
import HookCounterTwo from './components/useState/HookCounterTwo'
import HookCounterThree from './components/useState/HookCounterThree'
import HookCounterFour from './components/useState/HookCounterFour'
import HookCounterFive from './components/useEffect/HookCounterFive'
import HookMouse from './components/useEffect/HookMouse'
import MouseContainer from './components/useEffect/MouseContainer'
import IntervalHookCounter from './components/useEffect/IntervalHookCounter'
import DataFetching from './components/useEffect/DataFetching'

function App() {


  return (
    <div className="App">
      {/* --------------------  setState ------------------- */}
      {/* <HookCounterOne />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
      {/* --------------------  setState ------------------- */}
      {/* --------------------  useEffect ------------------- */}
      <HookCounterFive />
      <MouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/>
      {/* --------------------  useEffect ------------------- */}
    </div>
  )
}

export default App
