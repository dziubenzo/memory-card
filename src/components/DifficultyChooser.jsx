/* eslint-disable react/prop-types */

export default function DifficultyChooser({ difficultyLevels, setDifficulty }) {
  const [easy, medium, hard, alwaysHardcore] = difficultyLevels;
  return (
    <div className="difficulty-chooser">
      <button className="easy-button" value={easy} onClick={setDifficulty}>
        Easy ({easy})
      </button>
      <button className="medium-button" value={medium} onClick={setDifficulty}>
        Medium ({medium})
      </button>
      <button className="hard-button" value={hard} onClick={setDifficulty}>
        Hard ({hard})
      </button>
      <button
        className="always-hardcore-button"
        value={alwaysHardcore}
        onClick={setDifficulty}
      >
        Always Hardcore ({alwaysHardcore})
      </button>
    </div>
  );
}
