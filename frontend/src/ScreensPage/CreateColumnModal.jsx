import  { useState } from "react";
import PropTypes from "prop-types";

const CreateColumnModal = ({ closeModal, addColumn }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addColumn(title);
    setTitle("");
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Create New Column</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit">Create Column</button>
        </form>
      </div>
    </div>
  );
};

CreateColumnModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
};

export default CreateColumnModal;
