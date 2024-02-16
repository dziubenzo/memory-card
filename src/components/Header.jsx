/* eslint-disable react/prop-types */

import Scoreboard from './Scoreboard';

export default function Header({ points, best }) {
  return (
    <header>
      <h2>Memory Card</h2>
      <Scoreboard points={points} best={best} />
    </header>
  );
}
