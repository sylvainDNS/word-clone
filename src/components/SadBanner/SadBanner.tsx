import * as React from 'react'

interface SadBannerProps {
  answer: string
}

const SadBanner: React.FunctionComponent<SadBannerProps> = ({ answer }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default SadBanner
