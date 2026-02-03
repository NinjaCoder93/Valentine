# Valentine's Day Project 💕

A fun, interactive Valentine's Day web application for your boyfriend with animations, games, and quizzes!

## Features

✨ **Smooth Animations** - Floating hearts, pulse effects, and beautiful transitions
🎮 **Interactive Game** - "Catch the Hearts" game with scoring system
💞 **Love Quiz** - Personalized quiz to test how well your boyfriend knows you
🎨 **Fun & Playful Design** - Vibrant colors and engaging UI
📱 **Responsive** - Works on desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd D:\Angular\Valentine
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Project Structure

```
Valentine/
├── src/
│   ├── components/
│   │   ├── Game.jsx         # Catch the hearts game
│   │   ├── Game.css         # Game styling
│   │   ├── Quiz.jsx         # Love quiz component
│   │   └── Quiz.css         # Quiz styling
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styling
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## How to Play

### Home Screen
- Click the **Play** button to start

### Game Menu
- Choose between **Love Quiz** or **Catch the Hearts** game

### Love Quiz
- Answer 5 questions about your relationship
- Get instant feedback on your answers
- See your final score with personalized messages

### Catch the Hearts Game
- You have 30 seconds to catch falling hearts
- Click on each heart to catch it
- Earn points for each heart caught
- Try to get the highest score!

## Customization

You can easily customize the quiz questions by editing [src/components/Quiz.jsx](src/components/Quiz.jsx):

```javascript
const questions = [
  {
    question: "Your custom question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0 // Index of the correct answer
  },
  // Add more questions...
]
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Logic

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Enjoy! 💕

Have fun with your special someone! Feel free to modify colors, add more questions, or customize the game difficulty.

---

Made with ❤️ for Valentine's Day
