import  { useState } from "react";
import HelpModal from "../SideBar/HelpModal";

const Sidebar = () => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        {/* Aici poți adăuga opțiuni de navigare */}
        <li>Dashboard 1</li>
        <li>Dashboard 2</li>
        <li>Dashboard 3</li>
      </ul>
      <button onClick={openHelpModal}>Need Help</button>
      {isHelpModalOpen && <HelpModal closeModal={closeHelpModal} />}
    </div>
  );
};

export default Sidebar;
