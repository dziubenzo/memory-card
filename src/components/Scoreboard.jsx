/* eslint-disable react/prop-types */

export default function Scoreboard({ points, best }) {
  return (
    <div className="scoreboard">
      <p className="current-score">Current:</p>
      <p className="current-score-value">{points}</p>
      <p className="best-score">Best:</p>
      <p className="best-score-value">{best}</p>
    </div>
  );
}
