import React from "react";
import "./SingleCard.css";

export default function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
  // matched,
}) {
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
          <img src="/images/background-card.jpg" alt="card back" />
        </div>
      </div>
    </div>
  );
}
