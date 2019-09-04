import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

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

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => { setNotes(JSON.parse(localStorage.getItem('notes')) || []); }, []);
  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

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
      {notes.map((note) => <Note key={note.title} note={note} removeNote={removeNote} />)}
    </div>
  );
};


ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
