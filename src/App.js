import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, create] = useState([]);
  const [text, setText] = useState('');
  const [hidden, setButtonText] = useState('hide all');

  const createToDo = (event) => {
    const newToDo = { text: text, isComplete: false };
    create([...todos, newToDo]);
    setText('');
  }


  const toggleDone = ({target}) => {

    todos.forEach(todo => {

      if (todo.text === target.innerText && !target.classList.contains('completed')) {
        target.classList.add('completed');
        todo.isComplete = true;
        console.log('add ', target)
      }
      else if (todo.text === target.innerText && target.classList.contains('completed')) {
        target.classList.remove('completed');
        todo.isComplete = false;
        console.log('remove ', target)
      }
    })
  }


  const hideComplete = ({target}) => {
    target.classList.toggle('hidden');
    target.classList.contains('hidden') ? setButtonText('view all') : setButtonText('hide all'); 
  
    const done = todos.filter(todo => {
      if (todo.isComplete === false) {
        return todo;
      }
    })

    console.log(hidden)
    console.log('todos is ', todos)
    console.log('done is ', done);
    
    if (hidden === 'hide all') {
      create([...done]);
    } 
    else {
      create([...todos]); // why doesn't this work? and why are not completes getting class of completed
    }
  }


  return (
    <div className="App">
      <div>
        <form onSubmit={(event) => { event.preventDefault() }}>
          <input type="text" value={text} onChange={(event) => setText(event.target.value)}></input>
          <button onClick={(event) => { createToDo(event) }}>Create</button>
          <button className="hide-button" onClick={(e) => {hideComplete(e)}}>{hidden}</button>
        </form>      
      </div>
      <div>
        <ul>
          {todos.map((todo, idx) => {
            return (
              <li key={idx} onClick={event => {toggleDone(event)}}>{todo.text}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
