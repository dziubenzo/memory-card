/* eslint-disable react/prop-types */

export default function Card({ handleClick, keyProp }) {
  return (
    <div
      className="card"
      onClick={() => {
        handleClick(keyProp);
      }}
    >
      <div className="card-image">
        <p>Placeholder {keyProp}</p>
      </div>
      <p className="card-description">Description {keyProp}</p>
    </div>
  );
}
