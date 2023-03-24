import * as React from 'react'
import { NUM_OF_CHARS_ALLOWED } from '../../constants'
import type { Guess as TGuess } from '../../types'
import { range } from '../../utils'

interface GuessProps {
  guess?: TGuess
}

const cells = range(NUM_OF_CHARS_ALLOWED)

const Guess: React.FunctionComponent<GuessProps> = ({ guess }) => {
  const result = guess?.result || []

  return (
    <p className="guess">
      {cells.map(index => (
        <span key={index} className={`cell ${result[index]?.status ?? ''}`}>
          {result[index]?.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
