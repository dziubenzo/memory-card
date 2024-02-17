/* eslint-disable react/prop-types */

export default function DifficultyChooser({
  currentDifficulty,
  difficultyLevels,
  setDifficulty,
}) {
  const [easy, medium, hard, alwaysHardcore] = difficultyLevels;
  return (
    <div className="difficulty-chooser">
      <button
        className="easy-button"
        value={easy}
        onClick={setDifficulty}
        disabled={currentDifficulty === easy}
      >
        Easy ({easy})
      </button>
      <button
        className="medium-button"
        value={medium}
        onClick={setDifficulty}
        disabled={currentDifficulty === medium}
      >
        Medium ({medium})
      </button>
      <button
        className="hard-button"
        value={hard}
        onClick={setDifficulty}
        disabled={currentDifficulty === hard}
      >
        Hard ({hard})
      </button>
      <button
        className="always-hardcore-button"
        value={alwaysHardcore}
        onClick={setDifficulty}
        disabled={currentDifficulty === alwaysHardcore}
      >
        Always Hardcore ({alwaysHardcore})
      </button>
    </div>
  );
}
