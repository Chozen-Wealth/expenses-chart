import { useState } from 'react'
import './App.css'
import Balance from './components/balance/balance'
import Summary from './components/summary/summary'

function App() {
  return (
    <div className='App'>
      <div className="AppContent">
        <Balance/>
        <Summary/>
      </div>
    </div>
  )
}

export default App
