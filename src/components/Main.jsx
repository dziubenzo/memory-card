import { useState } from 'react';
import Card from './Card';

const CARDS = 3;

export default function Main() {
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState(Array(CARDS).fill(false));

  function createCards(cards) {
    let cardsArray = [];
    for (let i = 0; i < cards; i++) {
      cardsArray.push(<Card key={i} keyProp={i} handleClick={handlePoints} />);
    }
    return cardsArray;
  }

  function handlePoints(cardKey) {
    if (!clicked[cardKey]) {
      setPoints(points + 1);
      handleClicked(cardKey);
    } else {
      handleBest(points);
      setPoints(0);
      setClicked(Array(CARDS).fill(false));
    }
  }

  function handleClicked(cardKey) {
    const updatedClicked = clicked.map((item, index) => {
      return index === cardKey ? (item = true) : item;
    });
    setClicked(updatedClicked);
  }

  function handleBest(points) {
    if (points > best) {
      setBest(points);
    }
  }

  return (
    <main>
      <div className="cards">{createCards(CARDS)}</div>
    </main>
  );
}
