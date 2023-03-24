import * as React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import type { Guess } from '../../types'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const Game: React.FunctionComponent = () => {
  const [guesses, setGuesses] = React.useState<Array<Guess>>([])

  const handleSubmit = (guess: string) => {
    const newGuess = {
      id: crypto.randomUUID(),
      result: checkGuess(guess, answer),
    }

    setGuesses(previousGuesses => [...previousGuesses, newGuess])
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput onSubmit={handleSubmit} />
    </>
  )
}

export default Game
