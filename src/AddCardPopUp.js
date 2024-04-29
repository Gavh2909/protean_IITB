import React, { useState } from "react";

export const AddCardPopUp = ({ handleAddNewCard, handleCloseForm, column }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter title and description.");
      return;
    }
    handleAddNewCard(title, description, column);
    setTitle("");
    setDescription("");
    handleCloseForm();
  };
  return (
    <div className="add-card-form">
      <h3>Add New Card</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Desxriction:</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Card
        </button>
      </form>
    </div>
  );
};
