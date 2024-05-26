import  { useState } from "react";
import PropTypes from "prop-types"; // Importați PropTypes

import HeaderDashboard from "./HeaderDashboard";
import MainDashboard from "./MainDashboard";
import CreateCardModal from "./CreateCardModal";

const ScreensPage = ({ match }) => {
  const { boardName } = match.params;
  const [isCreateCardModalOpen, setCreateCardModalOpen] = useState(false);

  const handleOpenCreateCardModal = () => {
    setCreateCardModalOpen(true);
  };

  const handleCloseCreateCardModal = () => {
    setCreateCardModalOpen(false);
  };

  const handleCreateCard = (title, description, priority, deadline) => {
    // Implementează logica pentru crearea unei noi cărți
    console.log("Creating new card:", {
      title,
      description,
      priority,
      deadline,
    });
    handleCloseCreateCardModal();
  };

  return (
    <div className="screens-page">
      <HeaderDashboard
        boardName={boardName}
        onCreateCard={handleOpenCreateCardModal}
      />
      <MainDashboard />
      {isCreateCardModalOpen && (
        <CreateCardModal
          closeModal={handleCloseCreateCardModal}
          addCard={handleCreateCard}
        />
      )}
    </div>
  );
};

// Validați propietățile folosind PropTypes
ScreensPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      boardName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ScreensPage;
