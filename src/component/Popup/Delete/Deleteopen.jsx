import React from "react";
import Modal from "react-modal";
import { deleteData } from "../../../utils/UserAPIS/UserAPIS";

function Deleteopen({ user, closeModal }) {
  const handleDelete = async (id) => {
    try {
      console.log("Deleting data with ID:", id);

      await deleteData(id);

      console.log("Data deleted successfully");
    } catch (error) {
      console.error("Error handling delete operation:", error);
    }
  };
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        className="lg:w-[40vw] lg:h-[70vh] sm:w-[80vw] sm:h-[55vh] border bg-white rounded p-4"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur z-40"
      >
        <div className="flex justify-between  ">
          <button
            onClick={() => user && handleDelete(user._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 m-1 px-4 rounded"
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 m-1 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Deleteopen;
