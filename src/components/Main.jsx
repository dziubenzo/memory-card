/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';

let urlArray = [];
const catFetchURL = 'https://api.thecatapi.com/v1/images/search?limit=';
const catAPIKey =
  'live_5U3HmwHTVwwEo4cvNuopIIl7QcqMPZqvLPAb1fbUvBf99fD1W9scWpt8JG9jIGn9';
const dogFetchURL = 'https://api.thedogapi.com/v1/images/search?limit=';
const dogAPIKey =
  'live_01FxcvsYkWKBCpRstaKszIAppJcXxEkxXd1QIFcz63tbn2PHGtnZKmDrRvYMz3N8';

export default function Main({
  animal,
  cards,
  points,
  setPoints,
  best,
  setBest,
  clicked,
  setClicked,
}) {
  const [imagesFetched, setImagesFetched] = useState(false);

  useEffect(() => {
    async function fetchImages(apiURL, apiKey) {
      setImagesFetched(false);
      const rawImages = await fetch(apiURL + cards, {
        mode: 'cors',
        headers: {
          'x-api-key': apiKey,
        },
      });
      const parsedImages = await rawImages.json();
      for (const image of parsedImages) {
        urlArray.push(image.url);
      }
      setImagesFetched(true);
    }
    // Clear the array on difficulty or animal change
    urlArray = [];
    if (animal === 'cat') {
      fetchImages(catFetchURL, catAPIKey);
    } else {
      fetchImages(dogFetchURL, dogAPIKey);
    }
  }, [animal, cards]);

  function createCards(cards) {
    let cardsArray = [];
    for (let i = 0; i < cards; i++) {
      cardsArray.push(
        <Card
          key={i}
          keyProp={i}
          animal={animal}
          url={urlArray[i]}
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
    <>
      {imagesFetched ? (
        <div className="cards">{createCards(cards)}</div>
      ) : (
        <LoadingScreen animal={animal} cards={cards} />
      )}
    </>
  );
}
