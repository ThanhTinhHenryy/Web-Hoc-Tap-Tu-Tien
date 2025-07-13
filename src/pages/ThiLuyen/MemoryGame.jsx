import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import backgroundCard from "../../assets/background-card.jpg";
import memoryData from "../../../data/memory.js";
import "./MemoryGame.css";

// Component hiển thị một thẻ bài
function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div
      className={`card ${flipped ? "flipped" : ""} ${
        card.matched ? "matched" : ""
      }`}
    >
      <div className="inner">
        <div className="front">{card.content}</div>
        <div className="back" onClick={handleClick}>
          <img src={backgroundCard} alt="card back" />
        </div>
      </div>
    </div>
  );
}

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  // Xáo trộn thẻ bài
  const shuffleCards = () => {
    // Tạo mảng 2 phần tử cho mỗi từ: 1 thẻ src, 1 thẻ meaning
    const cards = memoryData.flatMap((word) => [
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
    setGameComplete(false);
  };

  // Xử lý lựa chọn thẻ
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Reset lượt chơi
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Kiểm tra kết thúc game
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameComplete(true);
    }
  }, [cards]);

  // So sánh 2 thẻ được chọn
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

  // Khởi tạo game khi component được mount
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div
      className="memory-game-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="memory-game-content">
        <h1 className="memory-game-title">Thi Luyện - Trò Chơi Trí Nhớ</h1>
        <p className="memory-game-description">
          Lật các thẻ bài để tìm cặp từ tiếng Anh và nghĩa tiếng Việt tương ứng.
        </p>

        <div className="memory-game-controls">
          <button onClick={shuffleCards} className="memory-game-button">
            Chơi mới
          </button>
          <p className="memory-game-turns">Lượt: {turns}</p>
          <Link to="/game" className="memory-game-back-button">
            Quay lại
          </Link>
        </div>

        {gameComplete && (
          <div className="memory-game-complete">
            <h2>Chúc mừng! Bạn đã hoàn thành trò chơi trong {turns} lượt</h2>
            <button onClick={shuffleCards} className="memory-game-button">
              Chơi lại
            </button>
          </div>
        )}

        <div className="memory-game-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
