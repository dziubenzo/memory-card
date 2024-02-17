/* eslint-disable react/prop-types */

export default function Card({ keyProp, catUrl, handleClick }) {
  return (
    <div
      className="card"
      onClick={() => {
        handleClick(keyProp);
      }}
    >
      <img
        className="card-image"
        src={catUrl}
        alt="Clickable Cat Image"
      />
    </div>
  );
}
