import '../styles/index.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useState } from 'react';

export default function App() {
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(0);
  return (
    <>
      <Header />
      <Main
        points={points}
        setPoints={setPoints}
        best={best}
        setBest={setBest}
      />
      <Footer />
    </>
  );
}
