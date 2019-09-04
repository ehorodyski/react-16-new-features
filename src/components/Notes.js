import React, { useEffect, useReducer } from 'react';
import { reducer } from '../reducers/notes.reducer';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const Notes = () => {

  const [notes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    dispatch({ type: 'SET_NOTES', notes });
  }, []);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title });
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add note:</p>
      <AddNoteForm dispatch={dispatch} />
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
};
export default Notes;