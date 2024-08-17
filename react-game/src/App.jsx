import React from 'react'
import './App.css'

import Title from './Title'
import PickASide from './PickASide'
import CoinFlip from './CoinFlip'
import Restart from './Restart'
import ScoreBoard from './ScoreBoard'
import Outcome from './Outcome'

export default function App() {

  return (
    <div className='App'>
      <Title />
      <PickASide />
      <CoinFlip />
      <Restart />
      <ScoreBoard />
      <Outcome />
    </div>
  )
}

