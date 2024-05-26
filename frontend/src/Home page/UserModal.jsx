
import PropTypes from "prop-types";

const UserModal = ({ closeModal }) => {
  const handleEditProfile = () => {
    // Implementează logica pentru editarea profilului
    console.log("Edit profile clicked");
  };

  const handleLogout = () => {
    // Implementează logica pentru deconectare
    console.log("Logout clicked");
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>User Profile</h2>
          {/* Aici poți adăuga formulare sau alte informații despre utilizator */}
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

UserModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default UserModal;
