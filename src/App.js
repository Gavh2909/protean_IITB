import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AddCardPopUp } from './AddCardPopUp';


function App() {

  // State for managing the cards in all 3 columns

  const[cards, setCards]= useState({
    column1:[],
    column2:[],
    column3:[]
  });

  // To manage the to show or hide the popup
  const[showForm, setShowForm]=useState(false);

  const handleToggleForm=()=>{
    setShowForm(!showForm);
  }

  const handleAddNewCard=(title, description) =>{
    const newCard = {title, description};

    setCards((prevCards) => ({
      ...prevCards,
      column1:[...prevCards.column1, newCard]  //test it for column 11 only as of now later can try for other two
    }));
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h2>Column 1</h2>
          <button className='btn btn-primary mb-3' onClick={handleToggleForm}>Add New Card</button>
          {cards.column1.map((card, index) => (
            <div className="card" key={index}>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
            </div>
          ))

          }
        </div>
        <div className="col-md-4">
          <h2>Column 2</h2>
          <button className='btn btn-primary mb-3' onClick={()=> handleAddNewCard('column2')}>Add New Card</button>
        </div>
        <div className="col-md-4">
          <h2>Column 3</h2>
          <button className='btn btn-primary mb-3' onClick={()=> handleAddNewCard('column3')}>Add New Card</button>
        </div>
      </div>
      {
        showForm && (
          <AddCardPopUp handleAddNewCard={handleAddNewCard} handleCloseForm={handleToggleForm}/>
        )
      }
    </div>
  );
}

export default App;
