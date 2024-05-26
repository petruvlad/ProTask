
import PropTypes from "prop-types";

const HeaderDashboard = ({ boardName, onCreateCard }) => {
  const handleCreateCard = () => {
    onCreateCard(); // Apelarea funcției de creare a unei noi cărți
  };

  return (
    <div className="header-dashboard">
      <h2>{boardName}</h2>
      <button onClick={handleCreateCard}>Create New Card</button>
    </div>
  );
};

HeaderDashboard.propTypes = {
  boardName: PropTypes.string.isRequired,
  onCreateCard: PropTypes.func.isRequired,
};

export default HeaderDashboard;

