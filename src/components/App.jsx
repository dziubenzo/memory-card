import '../styles/index.scss';
import Footer from './Footer';
import Main from './Main';
import Scoreboard from './Scoreboard';
import DifficultyChooser from './DifficultyChooser';
import { useState } from 'react';
import AppTitle from './AppTitle';

export default function App() {
  const DIFFICULTY_LEVELS = [5, 10, 20, 100];
  const [cards, setCards] = useState(5);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState(Array(cards).fill(false));

  function handleCards(event) {
    // Make sure the value attribute is always one of the four default values
    if (DIFFICULTY_LEVELS.includes(Number(event.target.value))) {
      setCards(Number(event.target.value));
      setPoints(0);
      setClicked(Array(Number(event.target.value)).fill(false));
    }
  }
  return (
    <>
      <header>
        <AppTitle />
        <DifficultyChooser
          difficultyLevels={DIFFICULTY_LEVELS}
          setDifficulty={handleCards}
        />
        <Scoreboard points={points} best={best} />
      </header>
      <Main
        cards={cards}
        points={points}
        setPoints={setPoints}
        best={best}
        setBest={setBest}
        clicked={clicked}
        setClicked={setClicked}
      />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
