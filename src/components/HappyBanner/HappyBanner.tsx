import * as React from 'react'

interface HappyBannerProps {
  numberOfGuesses: number
}

const HappyBanner: React.FunctionComponent<HappyBannerProps> = ({
  numberOfGuesses,
}) => {
  const pluralSuffix = numberOfGuesses > 1 ? 'es' : ''
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numberOfGuesses} guess{pluralSuffix}
        </strong>
        .
      </p>
    </div>
  )
}

export default HappyBanner
