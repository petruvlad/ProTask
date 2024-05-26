import  { useState } from "react";
import UserModal from "./UserModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <h1>Header</h1>
      <div>
        <button onClick={openModal}>User Profile</button>
        {isModalOpen && <UserModal closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
