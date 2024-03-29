import '../styles/index.scss';
import Footer from './Footer';
import Main from './Main';
import Scoreboard from './Scoreboard';
import DifficultyChooser from './DifficultyChooser';
import { useState } from 'react';
import AppTitle from './AppTitle';
import AnimalChooser from './AnimalChooser';
import GameOverScreen from './GameOverScreen';

export default function App() {
  const DIFFICULTY_LEVELS = [5, 10, 20, 100];
  const ANIMALS = ['cat', 'dog'];
  const [animal, setAnimal] = useState('cat');
  const [cards, setCards] = useState(5);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState(Array(cards).fill(false));

  function handleCards(event) {
    const newDifficulty = Number(event.target.value);
    // Make sure the value attribute is always one of the four default values
    if (DIFFICULTY_LEVELS.includes(newDifficulty)) {
      setCards(newDifficulty);
      setPoints(0);
      setClicked(Array(newDifficulty).fill(false));
    }
  }

  function handleAnimal(event) {
    const clickedAnimal = event.target.value;
    // Make sure the value attribute is always one of the two default values
    if (ANIMALS.includes(clickedAnimal)) {
      setAnimal(clickedAnimal);
      setCards(5);
      setPoints(0);
      setClicked(Array(5).fill(false));
    }
  }
  return (
    <>
      <header>
        <AppTitle />
        <AnimalChooser
          currentAnimal={animal}
          animals={ANIMALS}
          changeAnimal={handleAnimal}
        />
        <DifficultyChooser
          currentDifficulty={cards}
          difficultyLevels={DIFFICULTY_LEVELS}
          setDifficulty={handleCards}
        />
        <Scoreboard points={points} best={best} />
      </header>
      <main>
        {points === cards ? (
          <GameOverScreen />
        ) : (
          <Main
            animal={animal}
            cards={cards}
            points={points}
            setPoints={setPoints}
            best={best}
            setBest={setBest}
            clicked={clicked}
            setClicked={setClicked}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
