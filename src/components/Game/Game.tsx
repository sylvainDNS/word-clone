import * as React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import type { Guess } from '../../types'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import SadBanner from '../SadBanner'
import HappyBanner from '../HappyBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const Game: React.FunctionComponent = () => {
  const [guesses, setGuesses] = React.useState<Array<Guess>>([])

  const hasWin = guesses.some(guess =>
    guess.result.reduce(
      (acc, resultItem) => acc && resultItem.status === 'correct',
      true
    )
  )
  const hasLose = guesses.length >= NUM_OF_GUESSES_ALLOWED

  const isOver = hasWin || hasLose

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
      <GuessInput onSubmit={handleSubmit} disabled={isOver} />
      {hasLose ? <SadBanner answer={answer} /> : null}
      {hasWin ? <HappyBanner numberOfGuesses={guesses.length} /> : null}
    </>
  )
}

export default Game
