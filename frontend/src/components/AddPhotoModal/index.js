import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddPhotoForm from "./AddPhotoForm";
import "./AddPhoto.css";

function AddPhotoModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button is-small" onClick={() => setShowModal(true)}>
        Upload Photo
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddPhotoForm />
        </Modal>
      )}
    </>
  );
}

export default AddPhotoModal;
