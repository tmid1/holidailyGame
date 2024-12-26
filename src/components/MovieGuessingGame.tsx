"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Snowfall from './Snowfall';


interface MovieRow {
  Title: string;
  [key: string]: string;
}

const MovieGuessingGame = () => {
  const [movieTitles, setMovieTitles] = useState<string[]>([]);
  const [currentMovie, setCurrentMovie] = useState<string>('');
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [guessHistory, setGuessHistory] = useState<string[][]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [revealedLetters, setRevealedLetters] = useState<{[key: number]: string}>({}); // Add this state


  // First useEffect for loading data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/ChristmasMovies.csv');
        const responseText = await response.text();
        const parsedData = Papa.parse<MovieRow>(responseText, {
          header: true,
          skipEmptyLines: true
        });
        
        if (parsedData.data && parsedData.data.length > 0) {
          const titles = parsedData.data
            .filter(row => row.title)
            .map(row => row.title.toUpperCase())
            .filter(title => title.length <= 12);
          
          setMovieTitles(titles);
          
          if (titles.length > 0) {
            const randomMovie = titles[Math.floor(Math.random() * titles.length)];
            setCurrentMovie(randomMovie);
            console.log(randomMovie)
            setCurrentGuess(Array(randomMovie.length).fill(''));
          } else {
            setError('No movie titles found in CSV');
          }
        }
      } catch (error) {
        setError('Error loading movie titles');
        console.error('Error loading CSV:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (gameWon || gameOver) return;
    
    const value = e.target.value.toUpperCase();
    setInputValue(value);
    
    const newGuess = [...currentMovie].map((_, index) => {
      return value[index] || '';
    });
    setCurrentGuess(newGuess);
  };

  const revealRandomLetter = () => {
    // Get indices of unrevealed letters
    const unrevealedIndices = [...currentMovie].reduce((indices: number[], char, index) => {
      if (!revealedLetters[index] && char !== ' ') {
        indices.push(index);
      }
      return indices;
    }, []);

    // If there are unrevealed letters, reveal a random one
    if (unrevealedIndices.length > 0) {
      const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
      setRevealedLetters(prev => ({
        ...prev,
        [randomIndex]: currentMovie[randomIndex]
      }));
    }
  };

  const checkGuess = () => {
    const guess = currentGuess.join('');
    const newHistory = [...guessHistory, currentGuess];
    setGuessHistory(newHistory);
    
    if (guess === currentMovie) {
      setGameWon(true);
      setGameOver(true);
    } else {
      revealRandomLetter(); // Add this line
      if (newHistory.length >= currentMovie.length) {
        setGameOver(true);
      }
    }
    
    setCurrentGuess(Array(currentMovie.length).fill(''));
    setInputValue('');
  };

  const resetGame = () => {
    const randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    setCurrentMovie(randomMovie);
    setCurrentGuess(Array(randomMovie.length).fill(''));
    setGuessHistory([]);
    setGameWon(false);
    setGameOver(false);
    setInputValue('');
    setRevealedLetters({}); // Reset revealed letters
  };

  // Update the GuessRow component to show revealed letters
  const GuessRow = ({ guess, isCurrentGuess = false }: { guess: string[], isCurrentGuess?: boolean }) => (
    <div className="flex flex-wrap justify-center gap-1 mb-2">
      {guess.map((letter, index) => {
        const isCorrect = !isCurrentGuess && letter === currentMovie[index];
        const isWrong = !isCurrentGuess && letter && letter !== currentMovie[index];
        const isRevealed = revealedLetters[index];
        
        return (
          <div
            key={index}
            className={`
              relative flex items-center justify-center 
              ${getBoxStyles(currentMovie.length)}
              border-2 
              ${index % 2 === 0 ? 'border-red-500' : 'border-green-500'}
              ${isCorrect ? 'bg-green-100' : isWrong ? 'bg-red-100' : 'bg-white'}
              rounded
            `}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black">
              {isCurrentGuess && isRevealed ? revealedLetters[index] : letter || ''}
            </span>
            {/* {!isCurrentGuess && isRevealed && (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-blue-500">
                {revealedLetters[index]}
              </span>
            )} */}
          </div>
        );
      })}
    </div>
  );

  const getBoxStyles = (movieLength: number) => {
    if (movieLength <= 4) return 'h-16 w-16 text-2xl';
    if (movieLength <= 6) return 'h-14 w-14 text-xl';
    if (movieLength <= 8) return 'h-12 w-12 text-lg';
    if (movieLength <= 10) return 'h-10 w-10 text-base';
    if (movieLength <= 12) return 'h-8 w-8 text-sm';
    return 'h-6 w-6 text-xs';
  };

  const renderContent = () => {
    if (isLoading) {
      return <div className="text-2xl font-bold text-black">Loading...</div>;
    }

    if (error) {
      return <div className="text-2xl font-bold text-red-600">{error}</div>;
    }

    return (
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold mb-2 text-black">Guess the Christmas Movie Title!</h2>
        
        <div className="w-full">
          {guessHistory.map((guess, index) => (
            <GuessRow key={index} guess={guess} />
          ))}
        </div>
        
        {!gameOver && (
          <div className="w-full">
            <GuessRow guess={currentGuess} isCurrentGuess={true} />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              maxLength={currentMovie.length}
              className="w-full p-2 border-2 border-gray-300 rounded mb-2 text-center"
              placeholder="Type your guess here"
              autoFocus
            />
          </div>
        )}

        <div className="flex gap-4">
          <button 
            onClick={checkGuess} 
            disabled={currentGuess.some(box => !box) || gameOver}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            Check Guess
          </button>
          <button 
            onClick={resetGame}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            New Game
          </button>
        </div>

        {gameWon && (
          <div className="text-green-600 font-bold text-xl">
            Congratulations! You guessed it in {guessHistory.length} tries!
          </div>
        )}

        {gameOver && !gameWon && (
          <div className="text-red-600 font-bold text-xl">
            Game Over! The movie was {currentMovie}
          </div>
        )}

        <div className="text-black">
          Attempts: {guessHistory.length}/{currentMovie.length}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center -mt-20" style={{ backgroundColor: '#fffaeb'}}>
      {gameWon && <Snowfall />}
      <div className="max-w-3xl w-full p-6 text-stone-900">
        {renderContent()}
      </div>
    </div>
  );
};

export default MovieGuessingGame;