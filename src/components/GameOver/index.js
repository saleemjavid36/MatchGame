import './index.css'

const GameOver = props => {
  const {score, onClick} = props
  return (
    <div className="game-container">
      <div className="score-card">
        <div className="img">
          <img
            className="trophy-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
        </div>
        <p className="text">YOUR SCORE</p>
        <p className="result-score">{score}</p>
        <button className="reset-button" type="button" onClick={onClick}>
          <img
            className="reset-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
