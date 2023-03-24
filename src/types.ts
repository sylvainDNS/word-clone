export interface ResultItem {
  letter: string
  status: ResultStatus
}

export type Guess = {
  id: string
  result: Array<ResultItem>
}

export type ResultStatus = 'correct' | 'incorrect' | 'misplaced'
