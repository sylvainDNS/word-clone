import * as React from 'react'

interface GuessInputProps {
  onSubmit: (guess: string) => void
}

const GuessInput: React.FunctionComponent<GuessInputProps> = ({ onSubmit }) => {
  const [guess, setGuess] = React.useState<string>('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const nextGuess = e.target.value.toUpperCase()

    setGuess(() => nextGuess)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    onSubmit(guess)

    setGuess(() => '')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
      autoComplete="off"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letters"
      />
    </form>
  )
}

export default GuessInput
