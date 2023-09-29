import Button from "./components/Button";
import Form from "./components/Form";
import SignUpModal from "./components/SignUpModal";
import RegistrationForm from "./components/RegistrationForm";
import React, { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button />
      <button onClick={openModal}>Sign Up</button>
      {isModalOpen && <SignUpModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
