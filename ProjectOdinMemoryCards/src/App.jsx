import { useState, useEffect } from 'react'
import Box from './components/Box.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import './App.css'

function App() {
  const shuffleArray = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      const temp1 = shuffledArray[i];
      const temp2 = shuffledArray[j];
      [shuffledArray[i], shuffledArray[j]] = [temp2, temp1]; 
    }
    return shuffledArray; 
  }

  const [fullJokerList, setFullJokerList] = useState(shuffleArray([
    { id: 1, name: 'Joker', image: '/assets/Joker.jpg' },
    { id: 2, name: 'Greedy Joker', image: '/assets/Greedy_Joker.jpg' },
    { id: 3, name: 'Lusty Joker', image: '/assets/Lusty_Joker.jpg' },
    { id: 4, name: 'Gluttonous Joker', image: '/assets/Gluttonous_Joker.jpg' },
    { id: 5, name: 'Wrathful Joker', image: '/assets/Wrathful_Joker.jpg' },
    { id: 6, name: 'Misprint', image: '/assets/Misprint.jpg' },
    { id: 7, name: 'Mime', image: '/assets/Mime.jpg' },
    { id: 8, name: 'Abstract Joker', image: '/assets/Abstract_Joker.jpg' },
    { id: 9, name: 'Joker Stencil', image: '/assets/Joker_Stencil.jpg' },
    { id: 10, name: 'Faceless Joker', image: '/assets/Faceless_Joker.jpg' },
    { id: 11, name: 'Madness', image: '/assets/Madness.jpg' },
    { id: 12, name: 'Card Sharp', image: '/assets/Card_Sharp.jpg' },
    { id: 13, name: 'Baron', image: '/assets/Baron.jpg' }
  ]));

  const jokerList = [
    fullJokerList[0]
  ];
  
  const [level, setLevel] = useState(1);
  const [jokers, setJokers] = useState(jokerList);
  const [picked, setPicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleArrayFinal = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      const temp1 = shuffledArray[i];
      const temp2 = shuffledArray[j];
      [shuffledArray[i], shuffledArray[j]] = [temp2, temp1]; 
    }
    setJokers([shuffledArray[0]]);
    return shuffledArray; 
  }

  const jokerClick = (chosenid) => {
    if (picked.includes(chosenid)) {
      incorrectPick(chosenid);
    } else {
      correctPick(chosenid);
    }
    setJokers((prevJokers) => shuffleArray(prevJokers));
  }
  const correctPick = (chosenid) => {
    setPicked((prevPicked) => [...prevPicked, chosenid]);
    if (level < fullJokerList.length) {
      console.log("correctPick", picked, level);
      setJokers((prevJokers) => [...prevJokers, fullJokerList[prevJokers.length]]);
      setLevel(level + 1);
      setScore(score + 1);
      console.log(fullJokerList);
    }else{
      setHighScore(level);
      setPicked([]);
      setLevel(1);
      setScore(0);
      console.log("You win! Resetting game.");
      setFullJokerList((prevJokers) => shuffleArrayFinal(prevJokers));
      alert("You win! Resetting game.");
    }
  }
  const incorrectPick = () => {
    setPicked([]);
    setLevel(1);
    setScore(0);
    setHighScore(Math.max(score, highScore));
    console.log("incorrectPick", picked);
    setFullJokerList((prevJokers) => shuffleArrayFinal(prevJokers));
    alert("Incorrect pick! Resetting game.");
  }

  return (
    <div className="App">
      <title>Remember Jimbo?</title>
      <link rel="icon" type="image/x-icon" href="/assets/Joker.jpg"></link>
      <h1>Remember Jimbo?</h1>
      <Scoreboard currentScore={score} bestScore={highScore} />
      <Box jokerList={jokers} onCardClick={jokerClick} />
    </div>
  )
}

export default App
