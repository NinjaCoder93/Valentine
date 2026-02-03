import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
    setCurrentView('quiz')
  }

  return (
    <div className="app">
      {currentView === 'home' && !isPlaying && (
        <div className="home-screen">
          <div className="hearts-container">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="floating-heart">❤️</div>
            ))}
          </div>
          
          <div className="content">
            <h1>Welcome to the Valentine Quiz!</h1>

            <button className="play-button" onClick={handlePlayClick}>
              <span className="play-icon">▶</span>
              <span className="play-text">Play Quiz</span>
            </button>

            <div className="decorative-hearts">
              <span>💕</span>
              <span>💖</span>
              <span>💗</span>
            </div>
          </div>
        </div>
      )}

      {currentView === 'quiz' && isPlaying && (
        <Quiz onBack={() => setCurrentView('home')} />
      )}
    </div>
  )
}

export default App
