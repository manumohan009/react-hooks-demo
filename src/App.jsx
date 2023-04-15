import { createContext } from 'react'

import './App.css'
import ComponentC from './components/useContext/ComponentC'


export const UserContext = createContext()
export const ChannelContext = createContext()

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
      {/* <HookCounterFive />
      <MouseContainer />
      <IntervalHookCounter />
      <DataFetching /> */}
      {/* --------------------  useEffect ------------------- */}
      {/* --------------------  useContext ------------------- */}
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* --------------------  useContext ------------------- */}

    </div>
  )
}

export default App
