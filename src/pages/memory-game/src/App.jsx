import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const srcEnglish = [
  { id: 1, src: "Hello", meaning: "Xin Chào" },
  { id: 2, src: "Coder", meaning: "Lập Trình Viên" },
  { id: 3, src: "Cat", meaning: "Mèo" },
  { id: 4, src: "Dog", meaning: "Chó" },
  { id: 5, src: "Kid", meaning: "Trẻ con" },
  { id: 6, src: "Gay", meaning: "Gây" },
  { id: 7, src: "Name", meaning: "Tên" },
  { id: 8, src: "Tịnh", meaning: "Tịnh test" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    // Tạo mảng 2 phần tử cho mỗi từ: 1 thẻ src, 1 thẻ meaning
    const cards = srcEnglish.flatMap((word) => [
      {
        id: Math.random(),
        wordId: word.id,
        content: word.src,
        type: "src",
        matched: false,
      },
      {
        id: Math.random(),
        wordId: word.id,
        content: word.meaning,
        type: "meaning",
        matched: false,
      },
    ]);

    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // choice
  const handleChoice = (card) => {
    // console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (
        choiceOne.wordId === choiceTwo.wordId &&
        choiceOne.type !== choiceTwo.type
      ) {
        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.wordId === choiceOne.wordId) {
                return { ...card, matched: true };
              }
              return card;
            });
          });
          resetTurn();
        }, 1500); // Thời gian chờ trước khi mất thẻ
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  console.log(cards, turns);
  return (
    <>
      <div className="App">
        <h1>Bắt đầu game</h1>
        <button onClick={shuffleCards}>Chơi</button>

        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              hidden={card.matched}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
      </div>
    </>
  );
}

export default App;
