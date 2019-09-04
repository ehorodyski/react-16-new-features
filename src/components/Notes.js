import React, { useEffect, useReducer } from 'react';
import { reducer } from '../reducers/notes.reducer';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes.context';

const Notes = () => {

  const [notes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    dispatch({ type: 'SET_NOTES', notes });
  }, []);

  useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
};
export default Notes;