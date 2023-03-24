import type { Guess } from '../../types'

interface GuessListProps {
  guesses: Array<Guess>
}

const GuessList: React.FunctionComponent<GuessListProps> = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map(guess => (
        <p key={guess.id} className="guess">
          {guess.value}
        </p>
      ))}
    </div>
  )
}

export default GuessList
