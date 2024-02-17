/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import Card from './Card';

let urlArray = [];

export default function Main({
  cards,
  points,
  setPoints,
  best,
  setBest,
  clicked,
  setClicked,
}) {
  const [catsFetched, setCatsFetched] = useState(false);

  useEffect(() => {
    async function fetchCats() {
      setCatsFetched(false);
      const rawCats = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${cards}`,
        {
          mode: 'cors',
          headers: {
            'x-api-key':
              'live_5U3HmwHTVwwEo4cvNuopIIl7QcqMPZqvLPAb1fbUvBf99fD1W9scWpt8JG9jIGn9',
          },
        },
      );
      const parsedCats = await rawCats.json();
      for (const cat of parsedCats) {
        urlArray.push(cat.url);
      }
      setCatsFetched(true);
    }
    // Clear the array on difficulty change
    urlArray = [];
    fetchCats();
  }, [cards]);

  function createCards(cards) {
    let cardsArray = [];
    for (let i = 0; i < cards; i++) {
      cardsArray.push(
        <Card
          key={i}
          keyProp={i}
          catUrl={urlArray[i]}
          handleClick={handlePoints}
        />,
      );
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
      handleBest(points + 1);
    } else {
      setPoints(0);
      setClicked(Array(cards).fill(false));
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
      {catsFetched ? (
        <div className="cards">{createCards(cards)}</div>
      ) : (
        <div className="loading-screen">
          <img src="/cat.svg" alt="Cat Loading Icon" />
          <p>Loading your {cards} cats...</p>
        </div>
      )}
    </main>
  );
}
