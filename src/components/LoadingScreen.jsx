/* eslint-disable react/prop-types */

export default function LoadingScreen({ animal, cards }) {
  return (
    <div className="loading-screen">
      {animal === 'cat' ? (
        <img src="./cat.svg" alt="Cat Loading Icon" />
      ) : (
        <img src="./dog.svg" alt="Dog Loading Icon" />
      )}
      <p>
        Loading your {cards} {animal}s...
      </p>
    </div>
  );
}
