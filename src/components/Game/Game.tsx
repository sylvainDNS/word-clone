import * as React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const Game: React.FunctionComponent = () => {
  return <>Put a game here!</>
}

export default Game
