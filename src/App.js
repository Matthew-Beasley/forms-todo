import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [hidden, setButtonText] = useState('view all');

  const createToDo = () => {
    const newToDo = { text: text, isComplete: false };
    setTodos([...todos, newToDo]);
    setText('');
  }


  const toggleDone = (clickedTodo, todoIndex) => {
console.log(clickedTodo)
    const dos = todos.map((todo, idx) => {

      if (todoIndex === idx) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })

    setTodos(dos);
  }


  const hideComplete = ({ target }) => {
    if (hidden === 'view all') {
      setButtonText('hide all')
    }
    else {
      setButtonText('view all')
    }
  }


  return (
    <div className="App">
      <div>
        <form onSubmit={(event) => { event.preventDefault() }}>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)}></input>
          <button onClick={createToDo}>Create</button>
          <button className="hide-button" onClick={(e) => {hideComplete(e)}}>{hidden}</button>
        </form>      
      </div>
      <div>
        <ul>
          {todos.map((todo, idx) => {
            return (
              todo.isComplete  && hidden === 'hide all' ? '': 
              <li key={idx} className={todo.isComplete ? 'completed' : ''} onClick={event => {toggleDone(todo, idx)}}>{todo.text}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
