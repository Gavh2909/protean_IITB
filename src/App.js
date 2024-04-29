import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCardPopUp } from "./AddCardPopUp";

function App() {
  // State for managing the cards in all 3 columns

  const [cards, setCards] = useState({
    column1: [],
    column2: [],
    column3: [],
  });

  console.log(cards.column1)
  console.log(cards.column2)
  console.log(cards.column3)
  // To manage the to show or hide the popup
  const [showForm, setShowForm] = useState(false);

  // to get which column is selected
  const[column, setColumn]= useState('column1')
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddNewCard = (title, description, column) => {
    const newCard = { title, description };

    if(column==='column1'){
      setCards(prevCards => ({
        ...prevCards,
        column1:[...prevCards.column1, newCard]
      }));
    }
    else if(column==='column2'){
      setCards(prevCards => ({
        ...prevCards,
        column2:[...prevCards.column2, newCard]
      }));
    }
    if(column==='column3'){
      setCards(prevCards => ({
        ...prevCards,
        column3:[...prevCards.column3, newCard]
      }));
    }
  };

  const [editCard, setEditForm] = useState(null);
  
  const handleEditCardPopUp =(card, index) =>{
    setEditForm({card, index});
    setShowForm(true);
  }

  const handleUpdateCard =(title, description) =>{
    // Here I will implement edit form functionality
  }

  const handleDeleteCardPopUp=(index)=>{
     //implementing delete a perticular card 
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h2>Column 1</h2>
          <button className="btn btn-primary mb-3" onClick={()=>{
            handleToggleForm();
            setColumn('column1')}}>
            Add New Card
          </button>
          {cards.column1.map((card, index) => (
            <div className="card" key={index}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
          
        </div>
        <div className="col-md-4">
          <h2>Column 2</h2>
          <button className="btn btn-primary mb-3" onClick={()=>{
            handleToggleForm();
            setColumn('column2')}}>
            Add New Card
          </button>
          {cards.column2.map((card, index) => (
            <div className="card" key={index}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
          
        </div>
        <div className="col-md-4">
          <h2>Column 3</h2>
          <button className="btn btn-primary mb-3" onClick={()=>{
            handleToggleForm();
            setColumn('column3')}}>
            Add New Card
          </button>
          {cards.column3.map((card, index) => (
            <div className="card" key={index}>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
          
        </div>
      </div>
      {showForm && (
        <AddCardPopUp
          handleAddNewCard={handleAddNewCard}
          handleCloseForm={handleToggleForm}
          column={column}
        />
      )}
    </div>
  );
}

export default App;
