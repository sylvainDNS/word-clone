import type { Guess as TGuess } from '../../types'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess'

interface GuessListProps {
  guesses: Array<TGuess>
}

const rows = range(NUM_OF_GUESSES_ALLOWED)

const GuessList: React.FunctionComponent<GuessListProps> = ({ guesses }) => {
  return (
    <div className="guess-results">
      {rows.map(index => (
        <Guess key={index} guess={guesses[index]} />
      ))}
    </div>
  )
}

export default GuessList
