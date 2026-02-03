import { useState, useEffect } from 'react'
import './Quiz.css'

const Quiz = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showFinalQuestion, setShowFinalQuestion] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [questions, setQuestions] = useState([])
  const [wrongMessage, setWrongMessage] = useState('')
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const baseQuestions = [
      {
        question: "When did we first meet? 💫",
        baseOptions: ["November 3rd", "September 5th", "October 15th", "January 20th"],
      },
      {
        question: "The day we got hitched! 💍",
        baseOptions: ["December 12th", "June 15th", "August 8th", "November 25th"],
      },
      {
        question: "Our first hug... 🤗",
        baseOptions: ["December 29th", "January 2nd", "November 30th", "December 15th"],
      }
    ]

    const shuffled = baseQuestions.map(q => {
      const correct = q.baseOptions[0]
      const options = [...q.baseOptions].sort(() => Math.random() - 0.5)
      return {
        question: q.question,
        options,
        correctIndex: options.indexOf(correct)
      }
    })

    setQuestions(shuffled)
  }, [])

  const handleAnswer = (index) => {
    if (index !== questions[currentQuestion].correctIndex) {
      let msg = "";
      if (currentQuestion === 0) {
        msg = "Wrong turn — but great smile!";
      } else if (currentQuestion === 1) {
        msg = "That answer was single and ready to mingle — with the wrong choice.";
      } else if (currentQuestion === 2) {
        msg = "Missed — but you earned a hug token.";
      } else {
        msg = "That's not quite right… but I love your confidence 💕 Try again!";
      }
      setWrongMessage(msg);
      setShowWrongMessage(true);
      setTimeout(() => setShowWrongMessage(false), 2000);
      return;
    }

    setAnswers(prev => ({ ...prev, [currentQuestion]: index }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowFinalQuestion(true)
    }
  }

  const handleNoButtonHover = () => {
    setNoButtonPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200
    })
  }

  const handleYesClick = () => setShowThankYou(true)

  const goHome = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowFinalQuestion(false)
    setShowThankYou(false)
    setNoButtonPos({ x: 0, y: 0 })
    onBack()
  }

  if (!questions.length) return null

  return (
    <div className="quiz-container">
      {/* Floating hearts */}
      <div className="quiz-hearts-bg">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`quiz-heart quiz-heart-${i}`}>💗</span>
        ))}
      </div>

      <button className="home-button" onClick={goHome}>🏠 Home</button>

      {/* QUIZ QUESTIONS */}
      {!showFinalQuestion && (
        <div className="quiz-content">
          {showWrongMessage && (
            <div className="wrong-message-overlay">
              <div className="wrong-message-box">
                <p>{wrongMessage}</p>
              </div>
            </div>
          )}

          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
            />
          </div>

          <div className="question-number">
            Memory {currentQuestion + 1} of {questions.length}
          </div>

          <h2 className="quiz-question">
            {questions[currentQuestion].question}
          </h2>

          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer(index)}
                disabled={showWrongMessage}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FINAL SECTION */}
      {showFinalQuestion && !showThankYou && (
        <div className="valentine-question-container">
          <div className="final-section">
            <h2 className="final-question">Will you be my Valentine, Darshu? 💖</h2>

            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>
                Yes! 💕
              </button>

              <button
                className="no-button"
                onMouseEnter={handleNoButtonHover}
                style={{
                  transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* THANK YOU MESSAGE */}
      {showThankYou && (
        <div className="thank-you-message-card">
          <span className="valentine-heart">❤️</span>
          <h2>
            Thank you for saying “yes.” I know I’ve asked you to make U-turns more times than I can count — thank you for circling back every time.
            <br/><br/>
            <b>Happy Valentine’s Day, Darshu.</b> Being engaged to you is the most wonderful decision I’ve ever made.
            <br/>
            I’m excited for all the quiet mornings, silly adventures, and everything in between that we’ll share.
            <br/>
            <span style={{color:'#e63946'}}>You’re my favorite person — today and always.</span> 😊
          </h2>
        </div>
      )}
    </div>
  )
}

export default Quiz
