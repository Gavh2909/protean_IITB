import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  // State for managing the cards in all 3 columns

  const[cards, setCards]= useState({
    column1:[],
    column2:[],
    column3:[]
  });

  const handleAddNewCard=(column) =>{
    console.log("Here I will add new Cards in ", column)
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h2>Column 1</h2>
          <button className='btn btn-primary mb-3' onClick={()=> handleAddNewCard('column1')}>Add New Card</button>
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
    </div>
  );
}

export default App;
