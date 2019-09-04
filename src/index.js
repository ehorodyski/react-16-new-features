import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {

  const [count, setCount] = useState(props.count);
  const [label, setLabel] = useState(props.label);

  return (
    <div>
      <p>The current {label} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
    </div>
  );
};
App.defaultProps = { count: 0, label: 'count' };

const NoteApp = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add note:</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
      </form>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>Remove</button>
        </div>
      ))}
    </div>
  );
};


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
