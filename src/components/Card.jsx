/* eslint-disable react/prop-types */

export default function Card({ keyProp, animal, url, handleClick }) {
  return (
    <div
      className="card"
      onClick={() => {
        handleClick(keyProp);
      }}
    >
      <img
        className="card-image"
        src={url}
        alt={animal === 'cat' ? "Cat Image" : "Dog Image"}
      />
    </div>
  );
}
