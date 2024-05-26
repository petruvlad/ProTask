import PropTypes from "prop-types";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      <h2>Card List</h2>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>Priority: {card.priority}</p>
          <p>Deadline: {card.deadline}</p>
        </div>
      ))}
    </div>
  );
};

// Proprietăți necesare și tipuri de date pentru validare
CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      priority: PropTypes.oneOf(["low", "medium", "high"]).isRequired,
      deadline: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
