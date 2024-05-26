import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importăm PropTypes
import Card from "../ScreensPage/Card";

const Column = ({ columnData, onCardDrop }) => {
  const [cards, setCards] = useState(columnData.cards);

  useEffect(() => {
    setCards(columnData.cards);
  }, [columnData.cards]);

  const handleCardDrop = (sourceCardId, destinationCardId) => {
    const updatedCards = [...cards];
    const sourceIndex = updatedCards.findIndex(
      (card) => card.id === sourceCardId
    );
    const destinationIndex = updatedCards.findIndex(
      (card) => card.id === destinationCardId
    );

    const [removedCard] = updatedCards.splice(sourceIndex, 1);
    updatedCards.splice(destinationIndex, 0, removedCard);

    setCards(updatedCards);
    onCardDrop(sourceCardId, destinationCardId);
  };

  return (
    <div className="column">
      <h3>{columnData.title}</h3>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} cardData={card} onDrop={handleCardDrop} />
        ))}
      </div>
    </div>
  );
};

// Adăugăm validarea proprietăților folosind PropTypes
Column.propTypes = {
  columnData: PropTypes.shape({
    title: PropTypes.string.isRequired, // Proprietatea 'title' trebuie să fie un string și este obligatorie
    cards: PropTypes.arrayOf(PropTypes.object).isRequired, // Proprietatea 'cards' trebuie să fie un array de obiecte și este obligatorie
  }),
  onCardDrop: PropTypes.func.isRequired, // Proprietatea 'onCardDrop' trebuie să fie o funcție și este obligatorie
};

export default Column;
