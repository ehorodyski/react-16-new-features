import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [...state, { title: action.title, body: action.body }];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

const Note = ({ note, removeNote }) => {

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>Remove</button>
    </div>
  );
};

const NoteApp = () => {

  const [notes, dispatch] = useReducer(reducer, []);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    dispatch({ type: 'SET_NOTES', notes });
  }, []);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  const addNote = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD_NOTE', title, body });

    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title });
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
      {notes.map((note) => <Note key={note.title} note={note} removeNote={removeNote} />)}
    </div>
  );
};


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
