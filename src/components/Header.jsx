/* eslint-disable react/prop-types */

import DifficultyChooser from './DifficultyChooser';
import Scoreboard from './Scoreboard';

export default function Header({
  points,
  best,
  difficultyLevels,
  setDifficulty,
}) {
  return (
    <header>
      <h2>Memory Card</h2>
      <DifficultyChooser
        difficultyLevels={difficultyLevels}
        setDifficulty={setDifficulty}
      />
      <Scoreboard points={points} best={best} />
    </header>
  );
}
