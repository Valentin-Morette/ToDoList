import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [todo, setTodo] = useState('');
  const [todoarray, setTodoarray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodoarray([...todoarray, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodoArray = [...todoarray];
    newTodoArray.splice(index, 1);
    setTodoarray(newTodoArray);
  };

  return (
    <>
      <h1>Liste de tâches</h1>
      <form>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add" type="Submit" onClick={handleSubmit}>
          Ajouter
        </button>
      </form>
      <div className="divUl">
        <ul>
          {todoarray.map((todo, index) => {
            return (
              <div key={index} className="listEl">
                <li>- {todo}</li>
                <button
                  className="delete"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
