import React from "react";

export const Card = ({
  card,
  index,
  handleEditCardPopUp,
  handleDeleteCardPopUp,
}) => {
  return (
    <div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="card-actions">
        <button type="submit" className="btn btn-primary" onClick={handleEditCardPopUp(card, index)}>
          Edit
        </button>
        <button type="submit" className="btn btn-danger" onClick={handleDeleteCardPopUp(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};
