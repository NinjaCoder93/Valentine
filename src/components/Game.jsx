import { useState, useEffect } from 'react'
import './Game.css'

const Game = ({ onBack }) => {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [hearts, setHearts] = useState([])
  const [gameActive, setGameActive] = useState(true)
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    if (!gameActive || gameOver) return

    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 90,
        top: -50,
        emoji: ['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)]
      }
      setHearts(prev => [...prev, newHeart])
    }, 400)

    return () => clearInterval(heartInterval)
  }, [gameActive, gameOver])

  useEffect(() => {
    if (!gameActive || gameOver) return

    const moveInterval = setInterval(() => {
      setHearts(prev => {
        return prev
          .map(heart => ({ ...heart, top: heart.top + 5 }))
          .filter(heart => heart.top < 100)
      })
    }, 30)

    return () => clearInterval(moveInterval)
  }, [gameActive, gameOver])

  useEffect(() => {
    if (!gameActive || gameOver) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true)
          setGameActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameActive, gameOver])

  const handleHeartClick = (id) => {
    setHearts(prev => prev.filter(heart => heart.id !== id))
    setScore(prev => prev + 1)
  }

  const restartGame = () => {
    setScore(0)
    setGameOver(false)
    setGameActive(true)
    setTimeLeft(30)
    setHearts([])
  }

  return (
    <div className="game-container">
      <button className="game-back-button" onClick={onBack}>← Back</button>

      {!gameOver ? (
        <>
          <div className="game-stats">
            <div className="stat">
              <span className="label">Score:</span>
              <span className="value">{score}</span>
            </div>
            <div className="stat">
              <span className="label">Time:</span>
              <span className={`value ${timeLeft <= 10 ? 'warning' : ''}`}>
                {timeLeft}s
              </span>
            </div>
          </div>

          <div className="game-area">
            <div className="instruction">Click the falling hearts! 💕</div>
            
            {hearts.map(heart => (
              <div
                key={heart.id}
                className="heart-item"
                style={{
                  left: `${heart.left}%`,
                  top: `${heart.top}%`
                }}
                onClick={() => handleHeartClick(heart.id)}
              >
                {heart.emoji}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="game-over-screen">
          <h2>Game Over! 🎉</h2>
          
          <div className="final-score">
            <div className="score-display">{score}</div>
            <p className="hearts-caught">Hearts Caught!</p>
          </div>

          <div className="game-messages">
            {score >= 50 && (
              <p className="excellent">Excellent! You're amazing! 💕💕💕</p>
            )}
            {score >= 30 && score < 50 && (
              <p className="great">Great job! I'm impressed! 💕💕</p>
            )}
            {score >= 15 && score < 30 && (
              <p className="good">Good effort! That was fun! 💕</p>
            )}
            {score < 15 && (
              <p className="try-again">Let's try again! More fun next time! 💕</p>
            )}
          </div>

          <button className="play-again-btn" onClick={restartGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default Game
