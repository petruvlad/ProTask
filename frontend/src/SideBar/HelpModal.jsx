import  { useState } from "react";
import PropTypes from "prop-types";

const HelpModal = ({ closeModal }) => {
  const [isHelpSent, setHelpSent] = useState(false);

  const handleSubmit = () => {
    // Implementează logica pentru trimiterea cererii de ajutor
    console.log("Help request submitted");
    setHelpSent(true);

    // Închide automat fereastra modală după 3 secunde
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Need Help?</h2>
        {!isHelpSent ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4"></textarea>
            <button type="submit">Send</button>
          </form>
        ) : (
          <div>
            <p>Help request sent successfully!</p>
            <p>This modal will close automatically in a few seconds.</p>
          </div>
        )}
      </div>
    </div>
  );
};

HelpModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default HelpModal;
