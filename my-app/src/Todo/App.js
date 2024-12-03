import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  useEffect(() => {
    console.log("State changed:", toDo);
  }, [toDo]); // Runs whenever `toDo` changes


  useEffect(() => {
    console.log("Todos State changed:", toDos);
  }, [toDos]); // Runs whenever `toDos` changes

  const handleAdd = () => {
    console.log("clicked add");
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo(''); // Clear the input field after adding
  };

  const handleDelete = (id) => {
    console.log("clicked delete");
    setToDos(toDos.filter((obj) => obj.id !== id)); // Filter out the item with the given id
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday</h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => { console.log(e);setToDo(e.target.value) }}
          placeholder=" Add item..."
        />
        <button onClick={handleAdd} className="addButton">+</button>
      </div>

      <div className="todos">
        {toDos.map((obj) => (
          <div key={obj.id} className="todo">
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((obj2) =>
                      obj2.id === obj.id ? { ...obj2, status: !obj2.status } : obj2
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <button
                onClick={() => handleDelete(obj.id)} // Attach the handleDelete function here
                className="RemoveButton"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
