/* eslint-disable react/prop-types */

export default function AnimalChooser({
  currentAnimal,
  animals,
  changeAnimal,
}) {
  const [cat, dog] = animals;
  return (
    <div className="animal-chooser">
      <button
        className="cat-button"
        value={cat}
        onClick={changeAnimal}
        disabled={currentAnimal === cat}
      >
        Cats
      </button>
      <button
        className="dog-button"
        value={dog}
        onClick={changeAnimal}
        disabled={currentAnimal === dog}
      >
        Dogs
      </button>
    </div>
  );
}
