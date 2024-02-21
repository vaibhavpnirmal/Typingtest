import React, { useState } from 'react';

const TypingTest = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setUserInput(inputValue);
    if (!startTime) {
      setStartTime(Date.now());
    }
    if (inputValue === text) {
      setTypingCompleted(true);
    }
    const inputWords = inputValue.trim().split(' ');
    const originalWords = text.trim().split(' ');
    let correctCount = 0;
    let incorrectCount = 0;
    inputWords.forEach((word, index) => {
      if (word === originalWords[index]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    setCorrectWords(correctCount);
    setIncorrectWords(incorrectCount);
  };

  const resetTest = () => {
    setText('');
    setUserInput('');
    setStartTime(null);
    setTypingCompleted(false);
    setCorrectWords(0);
    setIncorrectWords(0);
  };

  const generateRandomText = () => {
    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    const words = loremIpsum.split(' ');
    const selectedWords = [];
    for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      selectedWords.push(words[randomIndex]);
    }
    setText(selectedWords.join(' '));
  };

  return (
    <div>
      <h1>Typing Test</h1>
      <button onClick={generateRandomText}>Start Test</button>
      <p>{text}</p>
      <textarea value={userInput} onChange={handleInputChange} disabled={typingCompleted} />
      <p>Correct Words: {correctWords}</p>
      <p>Incorrect Words: {incorrectWords}</p>
      <p>{typingCompleted && `Time taken: ${(Date.now() - startTime) / 1000} seconds`}</p>
      <button onClick={resetTest}>Restart Test</button>
    </div>
  );
};

export default TypingTest;
