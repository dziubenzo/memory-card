/* eslint-disable react/prop-types */

import { useState } from 'react';
import Card from './Card';

const CARDS = 6;

export default function Main({ points, setPoints, best, setBest }) {
  const [clicked, setClicked] = useState(Array(CARDS).fill(false));

  function createCards(cards) {
    let cardsArray = [];
    for (let i = 0; i < cards; i++) {
      cardsArray.push(<Card key={i} keyProp={i} handleClick={handlePoints} />);
    }
    shuffleCards(cardsArray);
    return cardsArray;
  }

  // Shuffle cards with Fisher–Yates shuffle
  function shuffleCards(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
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
