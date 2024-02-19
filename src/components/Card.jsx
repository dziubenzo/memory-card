/* eslint-disable react/prop-types */

export default function Card({ keyProp, animal, url, shuffle, handleClick }) {
  return (
    <div
      className={shuffle ? 'card shuffle' : 'card'}
      onClick={
        shuffle
          ? null
          : () => {
              handleClick(keyProp);
            }
      }
    >
      <img
        className="card-image"
        src={url}
        alt={animal === 'cat' ? 'Cat' : 'Dog'}
      />
    </div>
  );
}
